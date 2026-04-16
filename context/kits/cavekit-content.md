---
created: "2026-04-16"
last_edited: "2026-04-16"
---

# Cavekit: Content

## Scope
Content model and data sources for the portfolio: a Projects content collection with schema validation, a single About content file, a central site config, and seed content prefilled with the owner's real details. All content is build-time static — no runtime fetches.

## Requirements

### R1: Projects Collection Schema
**Description:** A Projects content collection exists with a strict, typed frontmatter schema so every project entry is validated at build time.
**Acceptance Criteria:**
- [ ] A content collection named `projects` is declared and its entries live under `src/content/projects/` as Markdown files.
- [ ] The collection schema validates the following frontmatter fields with the listed rules:
  - `title`: string, required.
  - `description`: string, required, maximum length 200 characters.
  - `tech`: array of strings, required, minimum 1 item.
  - `repoUrl`: URL, optional.
  - `liveUrl`: URL, optional.
  - `cover`: image reference, optional.
  - `date`: date, required.
  - `featured`: boolean, default `false`.
  - `draft`: boolean, default `false`.
- [ ] An entry missing a required field or using a wrong type causes `astro build` to fail.
**Dependencies:** none

### R2: Projects Rendering Access
**Description:** Projects are retrievable as a typed collection that can be filtered and sorted, with drafts excluded from production, and each entry's Markdown body is renderable as HTML.
**Acceptance Criteria:**
- [ ] `getCollection('projects')` returns all non-draft entries during a production build.
- [ ] Entries are sortable by `date` such that the most recent entry appears first.
- [ ] Draft entries (`draft: true`) are excluded from the production build output.
- [ ] Each entry's Markdown body can be rendered to HTML via the collection entry's rendering API.
**Dependencies:** R1

### R3: About Content
**Description:** A single Markdown file provides the About content with structured frontmatter and a Markdown body, evaluated at build time only.
**Acceptance Criteria:**
- [ ] A file `src/content/about.md` exists.
- [ ] Its frontmatter includes the fields `name`, `role`, `location`, and `email`, all strings.
- [ ] Its body contains Markdown bio content that is renderable as HTML at build time.
- [ ] No runtime fetch (e.g., to GitHub) is performed to produce About content — the About data is resolved entirely during `astro build`.
**Dependencies:** none

### R4: Site Config
**Description:** A central site configuration module exports values used by layout, navigation, SEO, and the Contact page, so there is a single source of truth for identity and links.
**Acceptance Criteria:**
- [ ] A file `src/config.ts` exists and exports a typed config object.
- [ ] The config includes the fields `siteName` (string), `siteUrl` (string equal to `https://www.heinemann.foo`), `author` (string), `description` (string), and `socialLinks` (array).
- [ ] Each item in `socialLinks` has the fields `platform` (string), `url` (string), and `icon` (string).
- [ ] Importing the config from a page or layout produces no TypeScript errors during build.
**Dependencies:** none

### R5: Seed Content
**Description:** Seed content exists for immediate deployability: at least two example projects and an About file prefilled with the owner's real identity and links.
**Acceptance Criteria:**
- [ ] At least 2 Markdown files exist in `src/content/projects/`, each validating against the Projects schema.
- [ ] `src/content/about.md` frontmatter has `email: tim@heinemann.foo`.
- [ ] The site config `socialLinks` (or the About content) includes a GitHub link to the profile `t1mdotcom`.
- [ ] The site config `socialLinks` (or the About content) includes a LinkedIn link referencing the slug `tim-heinemann-524764190`.
- [ ] The site config `socialLinks` (or the About content) includes a Xing link referencing the slug `Tim_Heinemann15`.
- [ ] The site config `socialLinks` (or the About content) includes a GPG link equal to `https://keyserver.ubuntu.com/pks/lookup?search=tim%40heinemann.foo&fingerprint=on&op=index`.
**Dependencies:** R1, R3, R4

### R6: Schema Validation Errors
**Description:** Schema violations must produce clear, actionable build errors so authors can fix bad content immediately.
**Acceptance Criteria:**
- [ ] Intentionally removing a required field (e.g., `title`) from a projects entry causes the build to exit with a non-zero status.
- [ ] The build error message names the offending file and the offending field.
- [ ] Intentionally supplying a wrong type (e.g., string instead of array for `tech`) causes the build to exit with a non-zero status and an error naming the field.
**Dependencies:** R1

## Out of Scope
- Blog or notes collection.
- Headless CMS integration (Contentful, Sanity, etc.).
- Image processing pipelines beyond what Astro provides by default.
- Localized content variants (i18n translations of the same entry).

## Cross-References
- See also: cavekit-site-shell.md — The site config (R4) is consumed by Header, Footer, and SEO meta in the site shell.
- See also: cavekit-pages.md — Pages load the Projects collection and render the About content and config values.

## Changelog
- 2026-04-16: initial draft
