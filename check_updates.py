#!/usr/bin/env python3
"""Check conference source pages for deadline-related changes."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


ENTRY_PATTERN = re.compile(
    r'\{\s*name:\s*"(?P<name>(?:\\.|[^"])*)"(?P<body>.*?)\n\s*\}',
    re.DOTALL,
)
URL_PATTERN = re.compile(r'url:\s*"(?P<url>https://(?:\\.|[^"])*)"')
RELEVANT_PATTERN = re.compile(
    r"\b("
    r"deadline|important dates?|call for papers?|submission|submit|"
    r"abstract|full paper|technical papers?|notification|camera.ready|"
    r"conference dates?|event dates?|registration|2027"
    r")\b",
    re.IGNORECASE,
)
BLOCK_TAGS = {
    "article", "br", "dd", "div", "dl", "dt", "footer", "h1", "h2", "h3",
    "h4", "header", "li", "main", "p", "section", "table", "td", "th", "tr",
}
SKIP_TAGS = {"script", "style", "svg", "noscript"}


class VisibleTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.skip_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in SKIP_TAGS:
            self.skip_depth += 1
        elif tag in BLOCK_TAGS and not self.skip_depth:
            self.parts.append("\n")

    def handle_endtag(self, tag: str) -> None:
        if tag in SKIP_TAGS and self.skip_depth:
            self.skip_depth -= 1
        elif tag in BLOCK_TAGS and not self.skip_depth:
            self.parts.append("\n")

    def handle_data(self, data: str) -> None:
        if not self.skip_depth:
            self.parts.append(data)

    def lines(self) -> list[str]:
        lines: list[str] = []
        seen: set[str] = set()
        for raw_line in "".join(self.parts).splitlines():
            line = " ".join(raw_line.split())
            if line and line not in seen:
                seen.add(line)
                lines.append(line)
        return lines


@dataclass(frozen=True)
class Source:
    url: str
    venues: tuple[str, ...]


def parse_sources(script_path: Path) -> list[Source]:
    grouped: dict[str, list[str]] = {}
    for match in ENTRY_PATTERN.finditer(script_path.read_text(encoding="utf-8")):
        url_match = URL_PATTERN.search(match.group("body"))
        if not url_match:
            continue
        name = bytes(match.group("name"), "utf-8").decode("unicode_escape")
        url = bytes(url_match.group("url"), "utf-8").decode("unicode_escape")
        grouped.setdefault(url, []).append(name)
    if not grouped:
        raise ValueError(f"No conference sources found in {script_path}")
    return [Source(url=url, venues=tuple(names)) for url, names in grouped.items()]


def focused_text(html: str) -> tuple[str, list[str]]:
    parser = VisibleTextParser()
    parser.feed(html)
    lines = parser.lines()
    relevant = [line for line in lines if RELEVANT_PATTERN.search(line)]
    if not relevant:
        relevant = lines[:80]
    relevant = relevant[:200]
    return "\n".join(relevant), relevant


def fetch_source(source: Source, previous: dict, timeout: float) -> dict:
    headers = {
        "User-Agent": "DeadlineClockBot/1.0 (+weekly public CFP monitor)",
        "Accept": "text/html,application/xhtml+xml",
        "Accept-Encoding": "identity",
    }
    if previous.get("etag"):
        headers["If-None-Match"] = previous["etag"]
    if previous.get("last_modified"):
        headers["If-Modified-Since"] = previous["last_modified"]

    checked_at = datetime.now(timezone.utc).isoformat()
    try:
        request = Request(source.url, headers=headers)
        with urlopen(request, timeout=timeout) as response:
            charset = response.headers.get_content_charset() or "utf-8"
            html = response.read(3_000_000).decode(charset, errors="replace")
            text, lines = focused_text(html)
            return {
                "url": source.url,
                "venues": list(source.venues),
                "final_url": response.url,
                "status_code": response.status,
                "checked_at": checked_at,
                "etag": response.headers.get("ETag"),
                "last_modified": response.headers.get("Last-Modified"),
                "content_hash": hashlib.sha256(text.encode("utf-8")).hexdigest(),
                "relevant_lines": lines,
                "error": None,
            }
    except HTTPError as error:
        if error.code == 304 and previous:
            result = dict(previous)
            result.update({
                "venues": list(source.venues),
                "checked_at": checked_at,
                "status_code": 304,
                "error": None,
            })
            return result
        return error_result(source, checked_at, f"HTTP {error.code}", previous)
    except (URLError, TimeoutError, OSError) as error:
        return error_result(source, checked_at, str(error), previous)


def error_result(source: Source, checked_at: str, message: str, previous: dict) -> dict:
    return {
        "url": source.url,
        "venues": list(source.venues),
        "final_url": previous.get("final_url", source.url),
        "status_code": None,
        "checked_at": checked_at,
        "etag": previous.get("etag"),
        "last_modified": previous.get("last_modified"),
        "content_hash": previous.get("content_hash"),
        "relevant_lines": previous.get("relevant_lines", []),
        "error": message,
    }


def load_state(path: Path) -> dict:
    if not path.exists():
        return {"sources": {}}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError) as error:
        raise ValueError(f"Cannot read state file {path}: {error}") from error
    return data if isinstance(data.get("sources"), dict) else {"sources": {}}


def line_changes(before: list[str], after: list[str]) -> tuple[list[str], list[str]]:
    before_set = set(before)
    after_set = set(after)
    return (
        [line for line in after if line not in before_set][:8],
        [line for line in before if line not in after_set][:8],
    )


def build_report(results: list[dict], previous_sources: dict, baseline: bool) -> tuple[str, list[dict]]:
    changed: list[dict] = []
    unavailable = [result for result in results if result["error"]]
    recovered: list[dict] = []

    for result in results:
        previous = previous_sources.get(result["url"])
        if not previous or result["error"]:
            continue
        if previous.get("error"):
            recovered.append(result)
        old_hash = previous.get("content_hash")
        new_hash = result.get("content_hash")
        if old_hash and new_hash and old_hash != new_hash:
            added, removed = line_changes(
                previous.get("relevant_lines", []),
                result.get("relevant_lines", []),
            )
            changed.append({"result": result, "added": added, "removed": removed})

    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = [
        "# Deadline Clock weekly source report",
        "",
        f"Checked **{len(results)} unique source pages** at **{now}**.",
        "",
    ]
    if baseline:
        lines.extend([
            "This was the first run, so it established a baseline. No change alert was generated.",
            "",
        ])
    elif changed:
        lines.extend([f"## {len(changed)} source page(s) changed", ""])
        for item in changed:
            result = item["result"]
            venues = ", ".join(result["venues"])
            lines.extend([f"### {venues}", "", f"Source: {result['url']}", ""])
            if item["added"]:
                lines.append("New deadline-related text:")
                lines.extend(f"- `{line[:300]}`" for line in item["added"])
                lines.append("")
            if item["removed"]:
                lines.append("Removed deadline-related text:")
                lines.extend(f"- `{line[:300]}`" for line in item["removed"])
                lines.append("")
    else:
        lines.extend(["## No deadline-related changes detected", ""])

    if recovered:
        lines.extend(["## Sources available again", ""])
        lines.extend(f"- {', '.join(item['venues'])}: {item['url']}" for item in recovered)
        lines.append("")

    if unavailable:
        lines.extend([f"## {len(unavailable)} source(s) unavailable", ""])
        lines.extend(
            f"- {', '.join(item['venues'])}: {item['url']} — {item['error']}"
            for item in unavailable
        )
        lines.append("")

    lines.extend([
        "## Review rule",
        "",
        "A changed source is a prompt for human verification. The public dashboard is never updated automatically from scraped text.",
        "",
    ])
    return "\n".join(lines), changed


def write_github_output(path: str | None, changed_count: int, unavailable_count: int) -> None:
    if not path:
        return
    with Path(path).open("a", encoding="utf-8") as output:
        output.write(f"changed={'true' if changed_count else 'false'}\n")
        output.write(f"changed_count={changed_count}\n")
        output.write(f"unavailable_count={unavailable_count}\n")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--catalog",
        type=Path,
        default=Path(__file__).with_name("script.js"),
        help="Dashboard JavaScript containing conference entries.",
    )
    parser.add_argument("--state", type=Path, default=Path(".cache/deadline-clock/source-state.json"))
    parser.add_argument("--report", type=Path, default=Path("deadline-check-report.md"))
    parser.add_argument("--workers", type=int, default=8)
    parser.add_argument("--timeout", type=float, default=20)
    parser.add_argument("--github-output", default=None)
    args = parser.parse_args()

    sources = parse_sources(args.catalog)
    previous_state = load_state(args.state)
    previous_sources = previous_state["sources"]
    baseline = not previous_sources

    results: list[dict] = []
    with ThreadPoolExecutor(max_workers=max(1, min(args.workers, 16))) as executor:
        futures = {
            executor.submit(fetch_source, source, previous_sources.get(source.url, {}), args.timeout): source
            for source in sources
        }
        for future in as_completed(futures):
            result = future.result()
            results.append(result)
            status = "unavailable" if result["error"] else "checked"
            print(f"[{status:11}] {', '.join(result['venues'])}")

    results.sort(key=lambda item: item["url"])
    report, changed = build_report(results, previous_sources, baseline)
    unavailable_count = sum(bool(result["error"]) for result in results)

    args.state.parent.mkdir(parents=True, exist_ok=True)
    args.state.write_text(
        json.dumps(
            {
                "generated_at": datetime.now(timezone.utc).isoformat(),
                "sources": {result["url"]: result for result in results},
            },
            indent=2,
            ensure_ascii=False,
        ) + "\n",
        encoding="utf-8",
    )
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(report, encoding="utf-8")
    write_github_output(args.github_output, len(changed), unavailable_count)

    print(f"\nWrote {args.report}: {len(changed)} changed, {unavailable_count} unavailable.")
    return 1 if unavailable_count == len(results) else 0


if __name__ == "__main__":
    sys.exit(main())
