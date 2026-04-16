---
created: "2026-04-16"
last_edited: "2026-04-16"
---

# Cavekit: Overview

## Project
Tim Heinemann Portfolio — a static Astro site deployed to GitHub Pages at `www.heinemann.foo`, built as a recruiter-ready developer portfolio with a Hacker-Retro aesthetic. Content is authored as Markdown via Astro Content Collections; there are no runtime data fetches.

## Domain Index

| Kit | Scope Summary | Status | Requirements | Acceptance Criteria |
| --- | --- | --- | --- | --- |
| cavekit-site-shell.md | Astro scaffolding, BaseLayout, Header/Footer/nav, global Hacker-Retro theme, GitHub Pages deploy, SEO, 404. | DRAFT | 8 | 28 |
| cavekit-content.md | Projects collection schema, About Markdown, central site config, seed content with owner's real data. | DRAFT | 6 | 21 |
| cavekit-pages.md | Home, About, Projects list, Project detail, Contact, 404 composition; accessibility; per-page SEO. | DRAFT | 8 | 33 |

Totals: 3 domains, 22 requirements, 82 acceptance criteria.

## Cross-Reference Map

| From | To | Interaction |
| --- | --- | --- |
| cavekit-site-shell | cavekit-content | BaseLayout, Header, and Footer consume the central site config (site name, author, social links) exposed by the content domain. |
| cavekit-site-shell | cavekit-pages | Every page in the pages domain renders inside BaseLayout and inherits the theme, nav, and SEO plumbing. |
| cavekit-content | cavekit-pages | Pages load the Projects collection, render the About Markdown, and read the site config to populate dynamic content. |

## Dependency Graph

```
cavekit-site-shell ─┐
                    ├──> cavekit-pages
cavekit-content  ───┘
```

- `cavekit-site-shell` and `cavekit-content` are independent and can be implemented in parallel.
- `cavekit-pages` depends on both and should be implemented after the shell and the content model are in place.
- No circular dependencies.

## Locked Technical Decisions
- Static Site Generator: Astro with TypeScript and Content Collections.
- Deploy target: GitHub Pages via GitHub Actions; custom domain `www.heinemann.foo` preserved through a `CNAME` file.
- Theme: dark background `#111`, Monospace (Hack Nerd Font with system monospace fallback), green accent `rgba(0, 255, 26, 0.5)`, header glow `0 2px 20px rgba(0, 255, 26, 0.5)`.
- Content model: Projects as individual Markdown files in a Content Collection (curated, not live-fetched); About as a single Markdown file; no runtime GitHub API calls.

## Out of Scope (Project-Wide)
- Blog, notes, or article collection.
- Downloadable resume / CV artefact.
- Contact form with backend.
- Analytics, cookie banners, and consent flows.
- Dark/light mode toggle — dark only.
- Internationalization and locale routing.

## Changelog
- 2026-04-16: initial draft
