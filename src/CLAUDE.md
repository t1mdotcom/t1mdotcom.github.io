# src/ — Tim Heinemann Portfolio

Astro 5 + TypeScript strict static site. Deployed to GitHub Pages at `https://www.heinemann.foo`.

## Layout

| Path | Purpose | Kit |
|------|---------|-----|
| `layouts/BaseLayout.astro` | Shared shell — head/meta/OG, font preload, skip-link, Header, main, Footer | cavekit-site-shell.md R2, R7, R8 |
| `components/Header.astro` | Sticky header, anchor nav (`#about`/`#work`/`#contact`), IntersectionObserver scroll-spy | cavekit-site-shell.md R3, R5 |
| `components/Footer.astro` | Copyright + author | cavekit-site-shell.md R2 |
| `styles/global.css` | Hacker-Retro theme + smooth-scroll/`scroll-padding-top` for sticky header (`prefers-reduced-motion` fallback) | cavekit-site-shell.md R4 |
| `content/config.ts` | Projects collection Zod schema | cavekit-content.md R1 |
| `content/about.md` | About content file (frontmatter + markdown), rendered into `#about` | cavekit-content.md R3 |
| `content/projects/*.md` | Project entries; full bodies rendered inline in `#work` | cavekit-content.md R5 |
| `config.ts` | Central site config (siteName, siteUrl, author, email, socialLinks) | cavekit-content.md R4 |
| `lib/projects.ts` | `getPublishedProjects()`, `getFeaturedProjects()` | cavekit-content.md R2 |
| `pages/index.astro` | One-pager — sections `#top` (profile/hero), `#about`, `#work` (projects inline), `#contact` | cavekit-pages.md R1 |
| `pages/404.astro` | 404 page using BaseLayout | cavekit-site-shell.md R8, cavekit-pages.md R6 |

Build tasks: T-001..T-032 (context/plans/build-site.md).

## Conventions

- The site is a single page (`index.astro`). Sections are `<section id>` blocks; navigation is anchor links. Add new sections by adding an `id` block plus a nav item in `Header.astro`.
- `index.astro` passes `title` + `description` to `BaseLayout`; `ogType` stays `website`.
- Drafts excluded from production via `getPublishedProjects()` filter.
- Frontmatter schema is strict — `astro build` fails on missing required fields or wrong types.
- Monaspace Neon is loaded through `@fontsource/monaspace-neon` in `styles/global.css`.
- Icons are rendered with `@lucide/astro`; keep them decorative with `aria-hidden="true"` when adjacent text already labels the action.
- WCAG AA verified: body 6.38:1, link 4.58:1, hover 10.6:1 against `#111`.
