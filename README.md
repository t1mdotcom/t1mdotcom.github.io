# Tim Heinemann — Personal Portfolio

Static portfolio site built with [Astro](https://astro.build/) and deployed to GitHub Pages at [www.heinemann.foo](https://www.heinemann.foo).

## Features

- Astro 5 static site, TypeScript strict mode
- Content Collections for curated project entries (Markdown + Zod-validated frontmatter)
- Inline About content rendered at build time (no runtime fetches)
- Hacker-Retro theme (dark `#111`, monospace, green accent)
- Semantic HTML, skip-to-content link, WCAG AA color contrast
- Per-page Open Graph metadata, auto-generated `sitemap.xml` + `robots.txt`
- Zero client-side JavaScript beyond Astro defaults

## Prerequisites

- Node.js 22 or higher
- npm

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

- `npm run dev` — Astro dev server
- `npm run build` — Production build into `dist/`
- `npm run preview` — Preview the production build
- `npm run typecheck` — `astro check` (TypeScript + template diagnostics)

## Project Structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deploy workflow
├── public/
│   ├── CNAME                      # www.heinemann.foo
│   ├── robots.txt                 # references sitemap-index.xml
│   └── assets/{fonts,img}/        # fonts, favicon
├── src/
│   ├── components/Header.astro    # nav with aria-current
│   ├── components/Footer.astro
│   ├── content/config.ts          # projects collection schema
│   ├── content/about.md           # About page content
│   ├── content/projects/*.md      # Project entries
│   ├── config.ts                  # Site config (identity, socials)
│   ├── layouts/BaseLayout.astro   # shared shell
│   ├── lib/projects.ts            # collection helpers
│   ├── pages/index.astro          # Home
│   ├── pages/about.astro          # About
│   ├── pages/projects/index.astro # Projects list
│   ├── pages/projects/[slug].astro# Project detail
│   ├── pages/contact.astro        # Contact
│   ├── pages/404.astro            # 404
│   └── styles/global.css          # Theme
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Adding a Project

Create `src/content/projects/my-project.md` with frontmatter:

```yaml
---
title: My Project
description: One-line description (max 200 chars).
tech: [Astro, TypeScript]
repoUrl: https://github.com/...
liveUrl: https://...
date: 2026-01-01
featured: true
draft: false
---
```

The schema (see `src/content/config.ts`) validates every entry at build time — `astro build` fails on missing required fields or wrong types.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. The `public/CNAME` keeps the custom domain.

## Customization

- **Theme colors and fonts** — `src/styles/global.css`
- **Site identity and social links** — `src/config.ts`
- **About bio** — `src/content/about.md`

## Design Notes

Dark background `#111`, monospace type (Hack Nerd Font → system monospace fallback), green accent `rgba(0, 255, 26, 0.5)` for interactive elements with hover/active lifting to `0.9` alpha. Header carries a green-glow box-shadow.
