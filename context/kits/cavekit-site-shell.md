---
created: "2026-04-16"
last_edited: "2026-04-16"
---

# Cavekit: Site Shell

## Scope
Foundational chrome of the portfolio: Astro project scaffolding, a shared root layout, global navigation (Header/Footer), global styling that enforces the Hacker-Retro theme, and the GitHub Pages deployment pipeline. This domain owns everything that wraps page content but renders no page content itself.

## Requirements

### R1: Astro Project Structure
**Description:** The site is an Astro project with TypeScript enabled and Content Collections available so all other domains can build on it.
**Acceptance Criteria:**
- [ ] Running the Astro dev command starts a local dev server without errors.
- [ ] Running the Astro build command produces a static output directory with HTML files.
- [ ] TypeScript type-check passes on a clean checkout with no type errors.
- [ ] Content Collections are enabled and discoverable by the Astro build (the build recognizes at least one declared collection).
**Dependencies:** none

### R2: Root Layout
**Description:** A single shared BaseLayout wraps every page, providing consistent head metadata, Header, Footer, and a content slot against the dark theme.
**Acceptance Criteria:**
- [ ] BaseLayout renders a `<head>` containing a `<title>` (settable per page), a meta description (settable per page), a favicon link, and Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`).
- [ ] BaseLayout renders a Header and Footer on every page that uses it.
- [ ] BaseLayout exposes a content slot so pages can inject their body.
- [ ] Rendered pages show background color `#111` on the `<body>`/root element.
**Dependencies:** R4

### R3: Navigation
**Description:** The Header provides site-wide navigation with a site name that links home and links to the main sections, operable by keyboard.
**Acceptance Criteria:**
- [ ] Header contains a site-name element that links to `/`.
- [ ] Header contains nav links labelled "About", "Projects", and "Contact" pointing to `/about`, `/projects`, and `/contact` respectively.
- [ ] The nav link corresponding to the current page is visually distinguished (e.g., by a class, style, or `aria-current="page"`).
- [ ] All nav links are reachable via keyboard Tab and have a visible focus indicator.
**Dependencies:** R2

### R4: Hacker-Retro Theme
**Description:** Global styles encode the Hacker-Retro visual identity: dark background, monospace type, green accent color for interactive elements, and a green-glow header shadow.
**Acceptance Criteria:**
- [ ] Global CSS sets body background to `#111`.
- [ ] Global CSS sets the base font-family to "Hack Nerd Font" with a system monospace fallback (e.g., `monospace`).
- [ ] Link and hover accent color resolves to `rgba(0, 255, 26, 0.5)` in rendered DOM inspection.
- [ ] Header element has `box-shadow: 0 2px 20px rgba(0, 255, 26, 0.5)` applied in rendered DOM inspection.
**Dependencies:** none

### R5: Responsive Layout
**Description:** Layout and navigation degrade cleanly on mobile viewports without horizontal scroll or clipped content.
**Acceptance Criteria:**
- [ ] At viewport width 375px, no element causes horizontal scrolling on the Home page.
- [ ] At viewport width below 640px, nav links are either stacked under the site name or accessible via a burger-style toggle (either approach passes).
- [ ] All nav links remain reachable and activatable at viewport widths 375px, 640px, and 1280px.
**Dependencies:** R3

### R6: GitHub Pages Deploy
**Description:** A GitHub Actions workflow builds the Astro site and publishes it to GitHub Pages under the custom domain.
**Acceptance Criteria:**
- [ ] A workflow file exists that triggers on push to `main`.
- [ ] The workflow runs the Astro build and publishes the build output to the `gh-pages` branch (or the equivalent Pages deployment target).
- [ ] The deployed output contains a `CNAME` file with the content `www.heinemann.foo`.
- [ ] After a successful workflow run, `https://www.heinemann.foo` serves the Home page with HTTP 200.
**Dependencies:** R1

### R7: SEO Basics
**Description:** Every page exposes correct metadata and the site publishes machine-readable discovery files.
**Acceptance Criteria:**
- [ ] BaseLayout accepts and renders per-page `title` and `description` values into `<title>` and `<meta name="description">`.
- [ ] BaseLayout renders Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`) with values derived from the page's title, description, canonical URL, and type.
- [ ] The production build output includes a `sitemap.xml` listing all generated pages.
- [ ] The production build output includes a `robots.txt` that references the sitemap URL.
**Dependencies:** R2

### R8: 404 Page
**Description:** A custom 404 page exists and uses the shared layout so branding stays consistent on errors.
**Acceptance Criteria:**
- [ ] A 404 route renders in the production build output.
- [ ] The 404 page uses BaseLayout (Header, Footer, and theme are present).
- [ ] The 404 page contains at least one link back to `/`.
**Dependencies:** R2

## Out of Scope
- Analytics integration (e.g., page tracking, event tracking).
- Cookie consent banner.
- Dark/light theme toggle — site is dark-only.
- Internationalization (i18n) and locale routing.

## Cross-References
- See also: cavekit-content.md — BaseLayout and Header/Footer consume the central site config (site name, social links, author).
- See also: cavekit-pages.md — All pages in the pages domain are rendered inside BaseLayout and must supply per-page title and description.

## Changelog
- 2026-04-16: initial draft
