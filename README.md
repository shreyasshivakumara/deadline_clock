# Deadline Clock

Static conference-deadline dashboard and weekly source monitor. The site has no
build step or third-party runtime dependencies.

The GitHub Actions workflow runs every Monday at 07:17 UTC. It restores the
previous source fingerprints, checks all venue pages concurrently, uploads a
Markdown report, and opens an issue only when deadline-related content changes.

## Run the website

From the repository root:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>.

## Add a conference

Conference records are stored in the `conferences` array at the beginning of
`script.js`. Add a new object before the array's closing `];`:

```javascript
{
  name: "ExampleConf 2027",
  fullName: "International Conference on Example Graphics",
  category: "graphics",
  field: "Rendering",
  tags: ["ACM", "GFX"],
  deadline: "2027-02-16T11:59:00Z",
  deadlineLabel: "Full paper",
  deadlineDisplay: "Feb 15, 2027 · 11:59 PM AoE",
  timezone: "AoE (UTC-12)",
  event: "July 5-8, 2027",
  location: "City, Country",
  status: "confirmed",
  url: "https://conference.example.org/2027/call-for-papers"
}
```

Use one of these `category` values so the main filters continue to work:

- `graphics` — computer graphics, rendering, geometry, animation, and graphics systems
- `vision` — computer vision, 3D reconstruction, and multimedia
- `xr` — virtual/augmented reality and HCI
- `visualization` — scientific visualization, information visualization, and visual analytics

Use `confirmed` only when the date appears on an official conference page.
Use `estimated` for a clearly identified planning estimate. If no 2027
submission date has been published, use:

```javascript
deadline: null,
deadlineDisplay: "Not announced",
status: "tba",
```

Add `ACM` or `IEEE` to `tags` when applicable; those tags drive the organization
filters. The `deadline` value must be an ISO 8601 UTC timestamp because it powers
the live countdown. For example, February 15 at 23:59 AoE (UTC-12) is
`2027-02-16T11:59:00Z`.

Before committing:

1. Confirm the date, time, and timezone on the linked official page.
2. Check that the conference is active and that the URL is not an unofficial aggregator.
3. Search `script.js` to avoid adding a duplicate venue or deadline.
4. Preview the page locally and test its category and organization filters.
5. Leave uncertain information as TBA rather than guessing.

Then publish the change:

```bash
git add script.js
git commit -m "Add ExampleConf 2027"
git push origin main
```

The Pages workflow deploys the update automatically.

Visitors can also search the dashboard first and use **Request this conference**
when no matching venue exists. That action opens the structured
`.github/ISSUE_TEMPLATE/add-conference.yml` form with the searched name already
in the issue title. A maintainer must verify the official source before adding
the entry to `script.js`.

## Check venue sources manually

```bash
python3 check_updates.py
```

The checker reads venue names and URLs directly from `script.js`, requests each
unique source concurrently, and fingerprints only deadline-related visible text.
It writes a local state file under `.cache/` and a Markdown report. The first run
creates the baseline; later runs report meaningful additions and removals.

The checker deliberately does not edit conference dates. A changed source must
be reviewed against its official call before updating the public dashboard.
