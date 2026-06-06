# Tim Heinemann — Personal Portfolio

Static portfolio site built with [Astro](https://astro.build/) and deployed to GitHub Pages at [www.heinemann.foo](https://www.heinemann.foo).

## Features

- Astro 5 static site, TypeScript strict mode
- Single-page layout with scroll sections (`#top` / `#about` / `#work` / `#contact`)
- Sticky header with anchor nav + IntersectionObserver scroll-spy (active-section highlight)
- Content Collections for curated project entries (Markdown + Zod-validated frontmatter), rendered inline in the Work section
- Inline About content rendered at build time (no runtime fetches)
- Hacker-Retro theme (dark `#111`, Monaspace Neon, green accent)
- Lucide SVG icons for navigation, CTAs, work cards, and contact links
- Semantic HTML, skip-to-content link, smooth scroll with `prefers-reduced-motion` fallback, WCAG AA color contrast
- Open Graph metadata, auto-generated `sitemap.xml` + `robots.txt`
- Minimal client-side JavaScript (scroll-spy only)

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
│   ├── components/Header.astro    # anchor nav + scroll-spy
│   ├── components/Footer.astro
│   ├── content/config.ts          # projects collection schema
│   ├── content/about.md           # About section content
│   ├── content/projects/*.md      # Project entries (rendered inline)
│   ├── config.ts                  # Site config (identity, socials)
│   ├── layouts/BaseLayout.astro   # shared shell
│   ├── lib/projects.ts            # collection helpers
│   ├── pages/index.astro          # One-pager: #top / #about / #work / #contact
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

- **Theme colors, Monaspace Neon font imports, and icon sizing** — `src/styles/global.css`
- **Site identity and social links** — `src/config.ts`
- **About bio** — `src/content/about.md`

## Design Notes

Dark terminal background, Monaspace Neon typeface with system monospace fallback, green/cyan/magenta accents, and subtle grid/scanline treatment.
