---
created: "2026-04-16"
last_edited: "2026-04-16"
---

# Cavekit: Pages

## Scope
All user-facing pages of the portfolio — Home, About, Projects list, Project detail, Contact, and the 404 view — composed inside the shared BaseLayout and powered by the content collections and site config. This domain owns page composition, routing, and per-page metadata.

## Requirements

### R1: Home Page
**Description:** The landing page at `/` introduces the owner and points recruiters into the rest of the site.
**Acceptance Criteria:**
- [ ] A page at route `/` exists and renders inside BaseLayout.
- [ ] The page displays the author's name and role sourced from the site config or About frontmatter.
- [ ] The page displays a 1–2 line intro sentence.
- [ ] The page contains a CTA link to `/projects` and a CTA link to `/contact`.
- [ ] If at least one project has `featured: true`, the page renders a teaser section listing up to three featured projects (title + link to the project detail page).
**Dependencies:** cavekit-site-shell R2, cavekit-content R2, cavekit-content R4

### R2: About Page
**Description:** The About page at `/about` renders the About Markdown file with its frontmatter header and styled body.
**Acceptance Criteria:**
- [ ] A page at route `/about` exists and renders inside BaseLayout.
- [ ] The page header displays `name`, `role`, and `location` from the About frontmatter.
- [ ] The page body renders the Markdown content of `about.md` as HTML.
- [ ] Links inside the rendered About body use the theme accent color `rgba(0, 255, 26, 0.5)`.
- [ ] The rendered About body uses the site's monospace font stack (Hack Nerd Font with monospace fallback).
**Dependencies:** cavekit-site-shell R2, cavekit-site-shell R4, cavekit-content R3

### R3: Projects List Page
**Description:** The Projects index at `/projects` lists all non-draft projects with essential metadata so visitors can scan quickly.
**Acceptance Criteria:**
- [ ] A page at route `/projects` exists and renders inside BaseLayout.
- [ ] All non-draft entries from the Projects collection are rendered on the page.
- [ ] Entries are ordered by `date` descending (most recent first).
- [ ] Each entry displays its `title`, `description`, and `tech` tags.
- [ ] Each entry displays its `cover` image when `cover` is present in frontmatter.
- [ ] Each entry displays a link to its `repoUrl` when present and a link to its `liveUrl` when present.
- [ ] Each entry's `title` links to its corresponding project detail page.
- [ ] The page does not implement infinite scroll; all entries are rendered in a single static list or grid.
**Dependencies:** cavekit-site-shell R2, cavekit-content R2

### R4: Project Detail Page
**Description:** Each project has its own static detail page rendering the Markdown body and metadata.
**Acceptance Criteria:**
- [ ] A dynamic route `/projects/[slug]` is generated for every non-draft project entry at build time via `getStaticPaths`.
- [ ] Each detail page renders inside BaseLayout.
- [ ] Each detail page renders the entry's Markdown body as HTML.
- [ ] Each detail page displays the entry's `title`, `date`, `tech` tags, and (when present) links to `repoUrl` and `liveUrl`.
- [ ] Requesting a detail page for a draft entry yields a 404 in the production build output.
**Dependencies:** cavekit-site-shell R2, cavekit-content R2

### R5: Contact Page
**Description:** The Contact page at `/contact` lists direct ways to reach the owner, using values from the site config.
**Acceptance Criteria:**
- [ ] A page at route `/contact` exists and renders inside BaseLayout.
- [ ] The page contains a `mailto:` link to the email defined in the site config or About frontmatter.
- [ ] The page contains a GPG link equal to `https://keyserver.ubuntu.com/pks/lookup?search=tim%40heinemann.foo&fingerprint=on&op=index`.
- [ ] The page contains links to the GitHub, LinkedIn, and Xing profiles defined in the site config `socialLinks`.
- [ ] The page does not render an HTML form.
**Dependencies:** cavekit-site-shell R2, cavekit-content R4

### R6: 404 Page Behavior
**Description:** The 404 page behaves as a navigable dead-end, letting visitors return to Home.
**Acceptance Criteria:**
- [ ] The 404 page contains at least one visible heading introducing the error state.
- [ ] The 404 page contains a link whose `href` equals `/`.
- [ ] The 404 page renders inside BaseLayout.
**Dependencies:** cavekit-site-shell R8

### R7: Accessibility
**Description:** Pages are navigable via keyboard and assistive tech and meet WCAG AA on colour contrast.
**Acceptance Criteria:**
- [ ] Every page uses semantic landmarks: exactly one `<h1>`, a `<nav>` in the Header, and a `<main>` element wrapping primary content.
- [ ] Project detail pages wrap the project body in an `<article>` element.
- [ ] Every page includes a skip-to-content link that is the first focusable element and jumps to `<main>`.
- [ ] Every rendered `cover` image has a non-empty `alt` attribute.
- [ ] Every interactive element shows a visible focus indicator when focused via keyboard.
- [ ] Body text and link text pass WCAG AA contrast against the `#111` background when evaluated by an automated contrast checker.
**Dependencies:** cavekit-site-shell R2, cavekit-site-shell R4

### R8: Per-Page Metadata
**Description:** Every page supplies its own title and description so SEO and social previews are correct.
**Acceptance Criteria:**
- [ ] Every page passes a unique `title` value to BaseLayout.
- [ ] Every page passes a `description` value to BaseLayout.
- [ ] The rendered `<title>` and `<meta name="description">` on each built HTML page reflect those values.
- [ ] Open Graph tags `og:title` and `og:description` on each built HTML page match the page's title and description.
**Dependencies:** cavekit-site-shell R7

## Out of Scope
- Project filter, tag, or search UI.
- Dedicated tags or categories pages.
- Pagination for the Projects list (not needed while project count is below 20).
- Contact form with a backend.
- RSS or Atom feed.

## Cross-References
- See also: cavekit-site-shell.md — All pages render inside BaseLayout and inherit the theme, Header, Footer, and SEO plumbing.
- See also: cavekit-content.md — Pages consume the Projects collection, the About file, and the site config.

## Changelog
- 2026-04-16: initial draft
