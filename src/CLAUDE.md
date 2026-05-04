# src/ — Tim Heinemann Portfolio

Astro 5 + TypeScript strict static site. Deployed to GitHub Pages at `https://www.heinemann.foo`.

## Layout

| Path | Purpose | Kit |
|------|---------|-----|
| `layouts/BaseLayout.astro` | Shared shell — head/meta/OG, skip-link, Header, main, Footer | cavekit-site-shell.md R2, R7, R8 |
| `components/Header.astro` | Nav, site-name, aria-current, responsive | cavekit-site-shell.md R3, R5 |
| `components/Footer.astro` | Copyright + author | cavekit-site-shell.md R2 |
| `styles/global.css` | Hacker-Retro theme (Monaspace Neon, terminal background, green/cyan/magenta accents, shared icon sizing) | cavekit-site-shell.md R4 |
| `content/config.ts` | Projects collection Zod schema | cavekit-content.md R1 |
| `content/about.md` | About content file (frontmatter + markdown) | cavekit-content.md R3 |
| `content/projects/*.md` | Project entries (seed content) | cavekit-content.md R5 |
| `config.ts` | Central site config (siteName, siteUrl, author, email, socialLinks) | cavekit-content.md R4 |
| `lib/projects.ts` | `getPublishedProjects()`, `getFeaturedProjects()` | cavekit-content.md R2 |
| `pages/index.astro` | Home (name, role, intro, CTAs, featured teaser) | cavekit-pages.md R1 |
| `pages/about.astro` | About (frontmatter header + markdown body) | cavekit-pages.md R2 |
| `pages/projects/index.astro` | Projects list (sorted date desc, tech tags, links) | cavekit-pages.md R3 |
| `pages/projects/[slug].astro` | Project detail (getStaticPaths, article wrapper) | cavekit-pages.md R4 |
| `pages/contact.astro` | Contact (mailto, GPG, social profiles, no form) | cavekit-pages.md R5 |
| `pages/404.astro` | 404 page using BaseLayout | cavekit-site-shell.md R8, cavekit-pages.md R6 |

Build tasks: T-001..T-032 (context/plans/build-site.md).

## Conventions

- Every page passes `title` + `description` props to `BaseLayout`. `ogType` defaults to `website`; project detail uses `'article'`.
- Drafts excluded from production via `getPublishedProjects()` filter.
- Frontmatter schema is strict — `astro build` fails on missing required fields or wrong types.
- Monaspace Neon is loaded through `@fontsource/monaspace-neon` in `styles/global.css`.
- Icons are rendered with `@lucide/astro`; keep them decorative with `aria-hidden="true"` when adjacent text already labels the action.
- WCAG AA verified: body 6.38:1, link 4.58:1, hover 10.6:1 against `#111`.
