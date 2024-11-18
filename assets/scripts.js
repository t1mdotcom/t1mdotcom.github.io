document.addEventListener("DOMContentLoaded", function () {
  function loadReadme() {
    const readmeUrl = "https://github.com/t1mdotcom/t1mdotcom/blob/main/README.md";

    fetch(readmeUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Coud not load file " + response.statusText);
        }
        return response.text();
      })
      .then((markdown) => {
        // Markdown in HTML konvertieren
        const dirtyHtml = marked(markdown);
        // HTML-Inhalt säubern
        const cleanHtml = DOMPurify.sanitize(dirtyHtml);
        // Den gesäuberten HTML-Inhalt in die Seite einfügen
        document.getElementById("readme-content").innerHTML = cleanHtml;
      })
      .catch((error) => {
        console.error("Fehler beim Laden des README:", error);
        document.getElementById("readme-content").innerHTML = "<p>Inhalt konnte nicht geladen werden.</p>";
      });
  }

  // Überprüfen, ob der "Über mich"-Bereich angezeigt wird
  function checkAndLoadReadme() {
    const aboutSection = document.getElementById("ueber-mich");
    if (aboutSection) {
      loadReadme();
    }
  }

  // Falls du dynamische Navigation verwendest, rufe die Funktion beim Laden des "Über mich"-Bereichs auf
  checkAndLoadReadme();
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

  async function loadContent(section) {
    // Inhalt je nach Abschnitt definieren
    let content = "";

    if (section === "contact") {
      content = await fetch('./pages/contact.html');
    } else if (section === "projects") {
      content = await fetch('./pages/projects.html');
      implementInfiniteScroll();
    } else if (section === "about-me") {
      content = await fetch('./pages/about_me.html');
    } else {
      content = await fetch('./pages/home.html');
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
