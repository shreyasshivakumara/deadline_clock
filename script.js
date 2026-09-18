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
    event: "June 20-24, 2027",
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
    deadline: "2027-01-21T22:00:00Z",
    deadlineLabel: "Stage 1 paper",
    deadlineDisplay: "Jan 21, 2027 · 10:00 PM UTC",
    timezone: "UTC",
    event: "August 2027",
    location: "To be announced",
    status: "confirmed",
    url: "https://s2027.siggraph.org/"
  },
  {
    name: "ICCV 2027",
    fullName: "IEEE/CVF International Conference on Computer Vision",
    category: "vision",
    field: "Computer vision",
    tags: ["IEEE", "CV", "3D", "A*"],
    deadline: "2027-03-06T07:59:00Z",
    deadlineLabel: "Full paper",
    deadlineDisplay: "Mar 5, 2027 · 11:59 PM Pacific",
    timezone: "Pacific Time",
    event: "October 2-8, 2027",
    location: "Hong Kong",
    status: "estimated",
    url: "https://iccv.thecvf.com/"
  },
  {
    name: "ACM MM 2027",
    fullName: "ACM International Conference on Multimedia",
    category: "vision",
    field: "Multimedia + graphics",
    tags: ["ACM", "MM", "CV"],
    deadline: "2027-04-10T11:59:00Z",
    deadlineLabel: "Full paper",
    deadlineDisplay: "Apr 9, 2027 · 11:59 PM AoE",
    timezone: "AoE (UTC-12)",
    event: "October/November 2027",
    location: "To be announced",
    status: "estimated",
    url: "https://www.acmmm.org/"
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
    deadline: null,
    deadlineLabel: "Journal / conference paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "February 27-March 3, 2027",
    location: "Melbourne, Australia",
    status: "tba",
    url: "https://ieeevr.org/2027/"
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
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://www.eg.org/wp/event/egsr/"
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
    event: "2027 dates not announced",
    location: "To be announced",
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
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://geometryprocessing.org/"
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
    location: "Asia-Pacific region",
    status: "tba",
    url: "https://pg2024.hsu.edu.cn/previous.html"
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
    event: "Late 2027",
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
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://www.eurovis.org/"
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
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://www.ismar.net/"
  },
  {
    name: "3DV 2027",
    fullName: "International Conference on 3D Vision",
    category: "vision",
    field: "3D vision + reconstruction",
    tags: ["IEEE", "3D", "CV"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://3dvconf.github.io/"
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
    url: "https://migconf.github.io/"
  },
  {
    name: "CASA 2027",
    fullName: "Computer Animation and Social Agents",
    category: "graphics",
    field: "Computer animation",
    tags: ["ANIM", "GFX"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://computeranimation.org/"
  },
  {
    name: "PacificVis 2027",
    fullName: "IEEE Pacific Visualization Symposium",
    category: "visualization",
    field: "Visualization",
    tags: ["VIS", "IEEE"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "Asia-Pacific region",
    status: "tba",
    url: "https://pacificvis.org/"
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
    name: "AVI 2027",
    fullName: "International Conference on Advanced Visual Interfaces",
    category: "visualization",
    field: "Visual interfaces",
    tags: ["ACM", "VIS", "HCI"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://dl.acm.org/conference/avi"
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
    url: "https://dl.acm.org/conference/vinci"
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
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://graphdrawing.github.io/gd2026/"
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
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://www.graphicslink.co.uk/IV2026/"
  },
  {
    name: "ETRA 2027",
    fullName: "ACM Symposium on Eye Tracking Research and Applications",
    category: "visualization",
    field: "Visual perception + interaction",
    tags: ["ACM", "VIS", "HCI"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "June 7-10, 2027",
    location: "Pamplona, Spain",
    status: "tba",
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
    url: "https://dl.acm.org/conference/sca"
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
    event: "Typically October/November",
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
    url: "https://web3d.siggraph.org/"
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
    url: "https://dl.acm.org/conference/scf"
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
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://dl.acm.org/conference/spm"
  },
  {
    name: "VRCAI 2027",
    fullName: "ACM SIGGRAPH Conference on Virtual-Reality Continuum and its Applications in Industry",
    category: "xr",
    field: "Industrial XR",
    tags: ["ACM", "XR"],
    deadline: null,
    deadlineLabel: "Full paper",
    deadlineDisplay: "Not announced",
    timezone: "To be announced",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://dl.acm.org/conference/vrcai"
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
    url: "https://dl.acm.org/conference/iss"
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
    deadlineDisplay: "Not announced",
    timezone: "Usually AoE",
    event: "2027 dates not announced",
    location: "To be announced",
    status: "tba",
    url: "https://dl.acm.org/conference/mmsys"
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
    event: "Early summer 2027",
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
        <span class="verified">checked 18 Sep 2026</span>
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
    requestConference.href = `https://github.com/shreyasshivakumara/deadline_clock/issues/new?template=add-conference.yml&title=${encodeURIComponent(title)}`;
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

render();
updateClock();
setInterval(updateClock, 1000);
