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

  function loadContent(section) {
    // Inhalt je nach Abschnitt definieren
    let content = "";

    if (section === "contact") {
      content = contactContent;
    } else if (section === "projects") {
      content = projectContent;
      implementInfiniteScroll();
    } else if (section === "about-me") {
      content = aboutMeContent;
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

const contactContent = `
<section id="contact">
    <h2>Contact</h2>
    <p>You can reach me via e-mail:</p>
    <ul class="contact-info">
        <li><a href="mailto:tim@heinemann.foo">tim@heinemann.foo</a></li>
    </ul>
    <p>
      You can check my public key for my e-mail here:
      <a class="link" href="https://keyserver.ubuntu.com/pks/lookup?search=tim%40heinemann.foo&fingerprint=on&op=index">Public GPG-Key</a>
    </p>

    <br />
    <br />

    <h3>Follow me on:</h3>
    <ul class="social-links">
        <li>
            <a href="https://www.xing.com/profile/Tim_Heinemann15" target="_blank" rel="noopener">
                <i class="nf nf-fa-square_xing"></i> Xing
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/tim-heinemann-524764190/" target="_blank" rel="noopener">
                <i class="nf nf-md-linkedin"></i> LinkedIn
            </a>
        </li>
        <li>
            <a href="https://github.com/t1mdotcom" target="_blank" rel="noopener">
                <i class="nf nf-md-github"></i> GitHub
            </a>
        </li>
    </ul>
</section>
`;

const aboutMeContent = `
<section id="about-me">
  <h2>About Me</h2>
  <div id="readme-content" class="markdown-body">

  </div>
</section>
`;

const projectContent = `
<h2>Projekte</h2>
<div id="projects">
    <!-- Projekte werden hier geladen -->
</div>
`;
