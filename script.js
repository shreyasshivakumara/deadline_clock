const conferences = [
  {
    name: "CVPR 2027",
    fullName: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    category: "vision",
    field: "Computer vision",
    tags: ["IEEE", "CV", "3D", "A*"],
    deadline: "2026-11-17T11:59:00Z",
    deadlineLabel: "Full paper",
    deadlineDisplay: "Nov 16, 2026 · 11:59 PM AoE",
    timezone: "AoE (UTC-12)",
    event: "June 20-25, 2027",
    location: "Seattle, Washington, USA",
    status: "confirmed",
    url: "https://cvpr.thecvf.com/Conferences/2027/Dates"
  },
  {
    name: "SIGGRAPH 2027",
    fullName: "ACM SIGGRAPH Technical Papers",
    category: "graphics",
    field: "Core computer graphics",
    tags: ["ACM", "GFX", "A*"],
    deadline: null,
    deadlineLabel: "Technical paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "August 8-12, 2027",
    location: "Anaheim, California, USA",
    status: "tba",
    url: "https://s2027.siggraph.org/"
  },
  {
    name: "ICCV 2027",
    fullName: "IEEE/CVF International Conference on Computer Vision",
    category: "vision",
    field: "Computer vision",
    tags: ["IEEE", "CV", "3D", "A*"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "October 2-8, 2027",
    location: "Hong Kong",
    status: "tba",
    url: "https://iccv.thecvf.com/"
  },
  {
    name: "ACM MM 2027",
    fullName: "ACM International Conference on Multimedia",
    category: "vision",
    field: "Multimedia + graphics",
    tags: ["ACM", "MM", "CV"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "Hong Kong",
    status: "tba",
    url: "https://2027.acmmm.org/"
  },
  {
    name: "Eurographics 2027",
    fullName: "48th Annual Conference of the European Association for Computer Graphics",
    category: "graphics",
    field: "Core computer graphics",
    tags: ["GFX", "EG"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "May 10-14, 2027",
    location: "Lucca, Italy",
    status: "tba",
    url: "https://www.eg.org/wp/event/eurographics-2027/"
  },
  {
    name: "IEEE VR 2027",
    fullName: "IEEE Conference on Virtual Reality and 3D User Interfaces",
    category: "xr",
    field: "Virtual + augmented reality",
    tags: ["IEEE", "VR", "HCI"],
    deadline: "2026-12-08T11:59:59Z",
    deadlineLabel: "Poster / research demo",
    deadlineDisplay: "Dec 7, 2026 · 11:59 PM AoE",
    timezone: "AoE (UTC-12)",
    event: "February 27-March 3, 2027",
    location: "Melbourne, Australia",
    status: "confirmed",
    url: "https://ieeevr.org/2027/contribute/posters/"
  },
  {
    name: "IEEE AIxVR 2027",
    fullName: "9th IEEE International Conference on Artificial Intelligence and eXtended and Virtual Reality",
    category: "xr",
    field: "AI + extended reality",
    tags: ["IEEE", "AI", "XR", "VR"],
    deadline: "2026-10-30T11:59:00Z",
    deadlineLabel: "Work-in-progress / demo paper",
    deadlineDisplay: "Oct 29, 2026 · 11:59 PM AoE",
    timezone: "AoE (UTC-12)",
    event: "January 25-27, 2027",
    location: "Vancouver, Canada",
    status: "confirmed",
    url: "https://aivr.science.uu.nl/2027/"
  },
  {
    name: "I3D 2027",
    fullName: "ACM SIGGRAPH Symposium on Interactive 3D Graphics and Games",
    category: "graphics",
    field: "Interactive graphics",
    tags: ["ACM", "GFX", "RT"],
    deadline: null,
    deadlineLabel: "Technical paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://i3dsymposium.org/"
  },
  {
    name: "EGSR 2027",
    fullName: "Eurographics Symposium on Rendering",
    category: "graphics",
    field: "Rendering",
    tags: ["GFX", "RENDER"],
    deadline: null,
    deadlineLabel: "Research paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "July 5-7, 2027",
    location: "Lugano, Switzerland",
    status: "tba",
    url: "https://egsr2027.usi.ch/"
  },
  {
    name: "HPG 2027",
    fullName: "High-Performance Graphics",
    category: "graphics",
    field: "Graphics systems + performance",
    tags: ["ACM", "GFX", "SYSTEMS"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "July 7-9, 2027",
    location: "Lugano, Switzerland",
    status: "tba",
    url: "https://www.highperformancegraphics.org/"
  },
  {
    name: "SGP 2027",
    fullName: "Symposium on Geometry Processing",
    category: "graphics",
    field: "Geometry processing",
    tags: ["GEO", "GFX"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "June 21-25, 2027 (IGS window)",
    location: "Singapore",
    status: "tba",
    url: "https://igs2027singapore.github.io/"
  },
  {
    name: "Pacific Graphics 2027",
    fullName: "Pacific Conference on Computer Graphics and Applications",
    category: "graphics",
    field: "Core computer graphics",
    tags: ["GFX", "PG"],
    deadline: null,
    deadlineLabel: "Journal / conference paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://pacificgraphics2026.github.io/history.html"
  },
  {
    name: "SIGGRAPH Asia 2027",
    fullName: "ACM SIGGRAPH Conference and Exhibition on Computer Graphics in Asia",
    category: "graphics",
    field: "Core computer graphics",
    tags: ["ACM", "GFX", "A*"],
    deadline: null,
    deadlineLabel: "Technical paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://asia.siggraph.org/"
  },
  {
    name: "EuroVis 2027",
    fullName: "Eurographics Conference on Visualization",
    category: "visualization",
    field: "Data visualization",
    tags: ["VIS", "EG"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "May 31-June 4, 2027",
    location: "Stuttgart, Germany",
    status: "tba",
    url: "https://eurovis27.github.io/web/"
  },
  {
    name: "IEEE VIS 2027",
    fullName: "IEEE Visualization and Visual Analytics Conference",
    category: "visualization",
    field: "Visualization + visual analytics",
    tags: ["VIS", "IEEE"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://ieeevis.org/"
  },
  {
    name: "ISMAR 2027",
    fullName: "IEEE International Symposium on Mixed and Augmented Reality",
    category: "xr",
    field: "Mixed + augmented reality",
    tags: ["IEEE", "XR", "HCI"],
    deadline: null,
    deadlineLabel: "Journal / conference paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "October 11-15, 2027 (provisional)",
    location: "Kobe, Japan",
    status: "tba",
    url: "https://www.ismar.net/ismar_future"
  },
  {
    name: "3DV 2027",
    fullName: "International Conference on 3D Vision",
    category: "vision",
    field: "3D vision + reconstruction",
    tags: ["IEEE", "3D", "CV"],
    deadline: "2026-08-29T11:59:00Z",
    deadlineLabel: "Full paper",
    deadlineDisplay: "Aug 28, 2026 · 11:59 PM AoE",
    timezone: "AoE (UTC-12)",
    event: "April 6-9, 2027",
    location: "Thessaloniki, Greece",
    status: "confirmed",
    url: "https://3dvconf.github.io/2027/"
  },
  {
    name: "MIG 2027",
    fullName: "ACM SIGGRAPH Conference on Motion, Interaction and Games",
    category: "graphics",
    field: "Animation + interaction",
    tags: ["ACM", "ANIM", "HCI"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://mig.siggraph.org/"
  },
  {
    name: "PacificVis 2027",
    fullName: "IEEE Pacific Visualization Symposium",
    category: "visualization",
    field: "Visualization",
    tags: ["VIS", "IEEE"],
    deadline: "2026-11-10T11:59:59Z",
    deadlineLabel: "Conference paper",
    deadlineDisplay: "Nov 9, 2026 · 11:59 PM AoE",
    timezone: "AoE (UTC-12)",
    event: "April 19-22, 2027",
    location: "Busan, South Korea",
    status: "confirmed",
    url: "https://pacificvis2027.github.io/contribute/conference-papers/"
  },
  {
    name: "LDAV 2027",
    fullName: "IEEE Large Data Analysis and Visualization",
    category: "visualization",
    field: "Large-scale visualization",
    tags: ["VIS", "HPC"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://www.computer.org/csdl/proceedings/ldav"
  },
  {
    name: "VINCI 2027",
    fullName: "International Symposium on Visual Information Communication and Interaction",
    category: "visualization",
    field: "Visual communication",
    tags: ["ACM", "VIS", "HCI"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://vinci-symp.org/"
  },
  {
    name: "GD 2027",
    fullName: "International Symposium on Graph Drawing and Network Visualization",
    category: "visualization",
    field: "Network visualization",
    tags: ["VIS", "GRAPH"],
    deadline: null,
    deadlineLabel: "Abstract / paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "September 15-17, 2027",
    location: "Budapest, Hungary",
    status: "tba",
    url: "https://graphdrawing.github.io/gd2027/"
  },
  {
    name: "IV 2027",
    fullName: "International Conference on Information Visualisation",
    category: "visualization",
    field: "Information visualization",
    tags: ["VIS", "INFO"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "July 28-31, 2027",
    location: "Rome, Italy",
    status: "tba",
    url: "https://iv.csites.fct.unl.pt/"
  },
  {
    name: "ETRA 2027",
    fullName: "ACM Symposium on Eye Tracking Research and Applications",
    category: "visualization",
    field: "Visual perception + interaction",
    tags: ["ACM", "VIS", "HCI"],
    deadline: "2026-10-17T11:59:59Z",
    deadlineLabel: "Full paper",
    deadlineDisplay: "Oct 16, 2026 · 11:59 PM AoE",
    timezone: "AoE (UTC-12)",
    event: "June 7-10, 2027",
    location: "Pamplona, Spain",
    status: "confirmed",
    url: "https://etra.acm.org/2027/"
  },
  {
    name: "SCA 2027",
    fullName: "ACM SIGGRAPH / Eurographics Symposium on Computer Animation",
    category: "graphics",
    field: "Computer animation",
    tags: ["ACM", "ANIM"],
    deadline: null,
    deadlineLabel: "Technical paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://computeranimation.org/"
  },
  {
    name: "SAP 2027",
    fullName: "ACM Symposium on Applied Perception",
    category: "xr",
    field: "Perception + graphics",
    tags: ["ACM", "PERCEPTION"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://sap.acm.org/"
  },
  {
    name: "VRST 2027",
    fullName: "ACM Symposium on Virtual Reality Software and Technology",
    category: "xr",
    field: "Virtual reality",
    tags: ["ACM", "XR"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://vrst.acm.org/"
  },
  {
    name: "Web3D 2027",
    fullName: "ACM International Conference on 3D Web Technology",
    category: "graphics",
    field: "Web-based 3D graphics",
    tags: ["ACM", "WEB3D"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://www.web3d.org/conferences"
  },
  {
    name: "SCF 2027",
    fullName: "ACM Symposium on Computational Fabrication",
    category: "graphics",
    field: "Computational fabrication",
    tags: ["ACM", "FAB"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://scf.acm.org/"
  },
  {
    name: "SPM 2027",
    fullName: "ACM Symposium on Solid and Physical Modeling",
    category: "graphics",
    field: "Geometric modeling",
    tags: ["ACM", "GEO"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "June 21-25, 2027 (IGS window)",
    location: "Singapore",
    status: "tba",
    url: "https://igs2027singapore.github.io/"
  },
  {
    name: "ISS 2027",
    fullName: "ACM International Conference on Interactive Surfaces and Spaces",
    category: "xr",
    field: "Interactive surfaces",
    tags: ["ACM", "HCI"],
    deadline: null,
    deadlineLabel: "Paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://iss.acm.org/"
  },
  {
    name: "ICMR 2027",
    fullName: "ACM International Conference on Multimedia Retrieval",
    category: "vision",
    field: "Multimedia retrieval",
    tags: ["ACM", "MM"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://dl.acm.org/conference/icmr"
  },
  {
    name: "MMSys 2027",
    fullName: "ACM Multimedia Systems Conference",
    category: "graphics",
    field: "Multimedia systems",
    tags: ["ACM", "SYSTEMS"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Round 2: Nov 19, 2026 · time TBA",
    timezone: "Time not stated",
    event: "March 30-April 2, 2027",
    location: "Ghent, Belgium",
    status: "tba",
    url: "https://2027.acmmmsys.org/research-track.html"
  },
  {
    name: "QoMEX 2027",
    fullName: "International Conference on Quality of Multimedia Experience",
    category: "vision",
    field: "Multimedia quality + experience",
    tags: ["IEEE", "MM", "QoE"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 exact dates not announced",
    location: "Shanghai, China",
    status: "tba",
    url: "https://qomex.org/"
  },
  {
    name: "BMVC 2027",
    fullName: "British Machine Vision Conference",
    category: "vision",
    field: "Computer vision",
    tags: ["CV", "BMVA"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://www.bmva.org/bmvc"
  }
];

const sourceStatusUrl = "source-status.json";
let sourceScanLabel = "pending";

const state = {
  category: "all",
  search: "",
  showTba: true,
  showEstimated: true,
  showPassed: false,
  acmOnly: false,
  ieeeOnly: false,
  sort: "deadline"
};

const grid = document.querySelector("#deadline-grid");
const emptyState = document.querySelector("#empty-state");
const requestConference = document.querySelector("#request-conference");
const resultCount = document.querySelector("#result-count");

function remaining(deadline) {
  if (!deadline) return null;
  const milliseconds = new Date(deadline).getTime() - Date.now();
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  return {
    milliseconds,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}

function countdownMarkup(item) {
  if (!item.deadline) {
    return `<div class="countdown-box tba-box"><strong>DEADLINE TBA</strong></div>`;
  }
  const value = remaining(item.deadline);
  if (value.milliseconds <= 0) {
    return `<div class="countdown-box tba-box"><strong>DEADLINE PASSED</strong></div>`;
  }
  return `
    <div class="countdown-box">
      <span>${item.deadlineLabel} in</span>
      <div class="countdown" data-deadline="${item.deadline}">
        <b>${value.days}</b>d : <b>${String(value.hours).padStart(2, "0")}</b>h :
        <b>${String(value.minutes).padStart(2, "0")}</b>m : <b>${String(value.seconds).padStart(2, "0")}</b>s
      </div>
    </div>`;
}

function cardMarkup(item) {
  const statusText = item.status === "tba" ? "TBA" : item.status;
  return `
    <article class="conference-card status-${item.status}">
      <div class="card-top">
        <span class="field">${item.field}</span>
        <div class="badges">
          ${item.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
          <span class="badge ${item.status}">${statusText}</span>
        </div>
      </div>
      <h2 class="conference-name">${item.name}</h2>
      <p class="conference-full">${item.fullName}</p>
      ${countdownMarkup(item)}
      <dl class="conference-data">
        <dt>deadline</dt><dd>${item.deadlineDisplay}</dd>
        <dt>timezone</dt><dd>${item.timezone}</dd>
        <dt>conference</dt><dd>${item.event}</dd>
        <dt>venue</dt><dd>${item.location}</dd>
      </dl>
      <div class="card-footer">
        <a class="source-link" href="${item.url}" target="_blank" rel="noopener noreferrer">official page ↗</a>
        <span class="verified">checked ${sourceScanLabel}</span>
      </div>
    </article>`;
}

function filteredConferences() {
  const query = state.search.toLowerCase();
  return conferences
    .filter((item) => state.category === "all" || item.category === state.category)
    .filter((item) => !query || `${item.name} ${item.fullName} ${item.field} ${item.location} ${item.tags.join(" ")}`.toLowerCase().includes(query))
    .filter((item) => state.showTba || item.status !== "tba")
    .filter((item) => state.showEstimated || item.status !== "estimated")
    .filter((item) => state.showPassed || !item.deadline || new Date(item.deadline).getTime() > Date.now())
    .filter((item) => !state.acmOnly || item.tags.includes("ACM"))
    .filter((item) => !state.ieeeOnly || item.tags.includes("IEEE"))
    .sort((a, b) => {
      if (state.sort === "name") return a.name.localeCompare(b.name);
      if (state.sort === "status") {
        return ["confirmed", "estimated", "tba"].indexOf(a.status) - ["confirmed", "estimated", "tba"].indexOf(b.status);
      }
      if (!a.deadline && !b.deadline) return a.name.localeCompare(b.name);
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;
      return new Date(a.deadline) - new Date(b.deadline);
    });
}

function render() {
  const items = filteredConferences();
  grid.innerHTML = items.map(cardMarkup).join("");
  resultCount.textContent = `${items.length} ${items.length === 1 ? "entry" : "entries"}`;
  emptyState.hidden = items.length > 0;
  if (!items.length) {
    const title = state.search ? `Add conference: ${state.search}` : "Add a conference";
    const body = "## Official conference page\n\nhttps://";
    requestConference.href = `https://github.com/shreyasshivakumara/deadline_clock/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    requestConference.hidden = !state.search;
  }
}

function updateCountdowns() {
  document.querySelectorAll("[data-deadline]").forEach((element) => {
    const value = remaining(element.dataset.deadline);
    if (value.milliseconds <= 0) {
      render();
      return;
    }
    element.innerHTML = `<b>${value.days}</b>d : <b>${String(value.hours).padStart(2, "0")}</b>h : <b>${String(value.minutes).padStart(2, "0")}</b>m : <b>${String(value.seconds).padStart(2, "0")}</b>s`;
  });

}

document.querySelector("#category-filters").addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;
  state.category = event.target.dataset.filter;
  document.querySelectorAll("#category-filters button").forEach((button) => button.classList.toggle("selected", button === event.target));
  render();
});
document.querySelector("#conference-search").addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  render();
});
document.querySelector("#show-tba").addEventListener("change", (event) => {
  state.showTba = event.target.checked;
  render();
});
document.querySelector("#show-estimated").addEventListener("change", (event) => {
  state.showEstimated = event.target.checked;
  render();
});
document.querySelector("#show-passed").addEventListener("change", (event) => {
  state.showPassed = event.target.checked;
  render();
});
document.querySelector("#acm-only").addEventListener("change", (event) => {
  state.acmOnly = event.target.checked;
  if (state.acmOnly) {
    state.ieeeOnly = false;
    document.querySelector("#ieee-only").checked = false;
  }
  render();
});
document.querySelector("#ieee-only").addEventListener("change", (event) => {
  state.ieeeOnly = event.target.checked;
  if (state.ieeeOnly) {
    state.acmOnly = false;
    document.querySelector("#acm-only").checked = false;
  }
  render();
});
document.querySelector("#sort-select").addEventListener("change", (event) => {
  state.sort = event.target.value;
  render();
});

const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("seeing-the-splat-theme");
document.documentElement.dataset.theme = savedTheme || "dark";
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("seeing-the-splat-theme", next);
});

function updateClock() {
  document.querySelector("#utc-clock").textContent = `${new Date().toISOString().replace("T", " ").slice(0, 19)} UTC`;
  updateCountdowns();
}

async function updateSourceScanDate() {
  const element = document.querySelector("#source-scan-date");
  if (!element) return;

  try {
    const response = await fetch(sourceStatusUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`Source status returned ${response.status}`);

    const data = await response.json();
    const startedAt = data.lastSuccessfulScan;
    if (!startedAt) throw new Error("No successful source-check run found");

    const date = new Date(startedAt);
    element.dateTime = date.toISOString();
    element.textContent = new Intl.DateTimeFormat("en", {
      dateStyle: "long",
      timeZone: "UTC"
    }).format(date);
    sourceScanLabel = new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC"
    }).format(date);
    document.querySelectorAll(".verified").forEach((label) => {
      label.textContent = `checked ${sourceScanLabel}`;
    });
  } catch (error) {
    console.warn("Could not update the source-scan date:", error);
  }
}

render();
updateClock();
updateSourceScanDate();
setInterval(updateClock, 1000);
