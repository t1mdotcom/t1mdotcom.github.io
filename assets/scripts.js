document.addEventListener("DOMContentLoaded", function () {
  // Alle Navigationslinks abrufen
  const homeLink = document.querySelectorAll(".header-left a");
  const navLinks = document.querySelectorAll(".header-right a");
  const mainContent = document.getElementById("main-content");

  mainContent.innerHTML = defaultContent;

  [...homeLink, ...navLinks].forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Verhindert das Standardverhalten des Links

      const section = this.getAttribute("data-section");

      // Inhalt basierend auf dem ausgewählten Abschnitt laden
      loadContent(section);
    });
  });

  function loadContent(section) {
    // Inhalt je nach Abschnitt definieren
    let content = "";

    if (section === "contact") {
      content = `
                <h2>Kontakt</h2>
                <p>Hier findest du meine Kontaktdaten.</p>
            `;
    } else if (section === "projects") {
      content = `
                <h2>Projekte</h2>
                <div id="projects">
                    <!-- Projekte werden hier geladen -->
                </div>
            `;
      // Endlos-Scrolling für Projekte initiieren
      implementInfiniteScroll();
    } else if (section === "about-me") {
      content = `
                <h2>Über mich</h2>
                <p>Informationen über mich.</p>
            `;
    } else {
      content = defaultContent;
    }

    mainContent.innerHTML = content;
  }

  function implementInfiniteScroll() {
    let page = 1;
    let loading = false;
    const projectsContainer = document.getElementById("projects");

    const loadMoreProjects = function () {
      if (loading) return;
      loading = true;

      // Simulierter Ladevorgang
      setTimeout(() => {
        const newProject = document.createElement("div");
        newProject.classList.add("project-item");
        newProject.innerHTML = `<p>Projekt ${page}</p>`;
        projectsContainer.appendChild(newProject);
        page++;
        loading = false;
      }, 500);
    };

    // Initial einige Projekte laden
    for (let i = 0; i < 5; i++) {
      loadMoreProjects();
    }

    // Scroll-Event hinzufügen
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreProjects();
      }
    });
  }
});

const defaultContent = `
<ul>
  <li><a href="https://keyserver.ubuntu.com/pks/lookup?search=tim%40heinemann.foo&fingerprint=on&op=index">Public GPG-Key</a></li>
</ul>
`;
