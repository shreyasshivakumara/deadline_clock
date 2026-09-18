# Deadline Clock

Static conference-deadline dashboard and weekly source monitor.

The GitHub Actions workflow runs every Monday at 07:17 UTC. It restores the
previous source fingerprints, checks all venue pages concurrently, uploads a
Markdown report, and opens an issue only when deadline-related content changes.

## Run the website

From `Projects/Third_project`:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/deadlines/>.

## Check venue sources manually

From the repository root:

```bash
python3 Projects/Third_project/deadlines/check_updates.py
```

The checker reads venue names and URLs directly from `script.js`, requests each
unique source concurrently, and fingerprints only deadline-related visible text.
It writes a local state file under `.cache/` and a Markdown report. The first run
creates the baseline; later runs report meaningful additions and removals.

The checker deliberately does not edit conference dates. A changed source must
be reviewed against its official call before updating the public dashboard.
