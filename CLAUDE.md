# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build to dist/
npm run preview   # Serve the production build locally
```

No linter or test suite is configured.

## Architecture

**Stack:** React 18 + Vite 4 + TailwindCSS 3 + React Router 6 + EmailJS

**Entry:** `src/main.jsx` lazy-loads `App.jsx` with a 1-second artificial delay behind a `<Suspense>` fallback (`Loading` component).

**Routing (App.jsx):**
- `/` → `Home` (all portfolio sections stacked vertically)
- `/project/:name` → `Project` detail page (looks up by `title` field in projects-data)
- `/message` → post-contact-form confirmation
- `*` → Error 404

`App.jsx` also mounts two global behaviour components on every route:
- `ScrollReveal` — IntersectionObserver that adds `.revealed` to any `[data-reveal]` element when it enters the viewport. All section content uses this attribute.
- `MagneticButtons` — subtle mouse-follow effect on `[data-magnet]` elements.
- `Cursor` — ambient radial-gradient glow that follows the mouse (does NOT override the system cursor).
- `NoiseTexture` — fixed SVG fractal-noise overlay for background texture.

**Design system (read these before touching styles):**
- `src/variables.css` — single source of truth for all design tokens: oklch colour variables (`--bg`, `--ink`, `--accent`, `--rule`, etc.), spacing scale (`--sp-N`), and font stacks. Dark theme is the `.dark` selector overriding the same vars. **Important:** `oklch()` values must use literal numbers — do not use `var()` inside `oklch()` for individual parameters (e.g. `oklch(0.58 0.09 var(--hue))`) as browsers do not reliably support substituting a CSS variable for a single function argument inside a colour function. Write the full value: `oklch(0.58 0.09 225)`.
- `src/index.css` — global resets, typography helper classes (`.display`, `.h2`, `.eyebrow`, `.lede`), shared utility classes (`.btn`, `.btn-primary`, `.btn-ghost`, `.tag`, `.skill-pill`, `.side-card`, `.field`, `.sec-head`), keyframe animations, and the cursor/noise overlay styles.
- `tailwind.config.cjs` — bridges Tailwind utilities to CSS vars (e.g. `bg-accent` → `var(--accent)`). Dark mode uses `selector` strategy. Legacy colour names (`lightBlue`, `offWhite`, etc.) are kept as aliases but new code should use CSS vars directly.
- **Do not hardcode hex colours.** Always use CSS custom properties from `variables.css`.

**Dark mode:** The `.dark` class lives on `<html>`. It is toggled by `Navbar.jsx` and persisted to `localStorage`. An inline script in `index.html` applies it before first paint to prevent flash.

**Data layer — three files under `src/data/`:**
- `jobs-data.js` — exports `eData` array. Each entry has: `id`, `era` (display date range), `title`, `titleAccent` (word to italicise in the serif font), `company`, `type` ("Freelance" | "Full Time"), `role`, `isCurrent` (boolean — drives the "Current" badge), `description`, `tags[]`. Displayed **reversed** (most recent first) by `WorkExperience.jsx`.
- `skills-data.js` — exports `skillCategories` array. Each entry has `id`, `label`, `title`, `primary[]` (dark pill), `additional[]` (light pill). Rendered as a CSS Grid in `Skills.jsx`.
- `projects-data.js` — default export array. Each entry has `id`, `title`, `stack[]`, `description`, `imgUrl`, `link`. The `/project/:name` route matches on `title`, so titles must stay unique.

**Section order in `Home.jsx`:** Hero → About → WorkExperience → Skills → Portfolio → Contact. Each section is a self-contained component with its own CSS file.

**Typography pattern:** Section headings use the `.h2` class. The serif italic accent is applied by wrapping the accent word in `<em>` — the CSS for `.h2 em` (and `.display em`) switches to `Instrument Serif` italic automatically. Keep this pattern consistent.

**Contact form:** `Contact.jsx` uses EmailJS (`service_wr38wju` / `template_39rbfk9` / public key `bXQK0o-7V-kRbDiXx`). On submit it calls `window.location.replace("/message")`.

**Assets:** All static assets (images, SVGs, CV PDF, logos) live in `public/assets/`. Reference them as `/assets/filename` — Vite serves `public/` at the root.

## Owner info

Built by Varant Kalemkerian. All information in the data files (`jobs-data.js`, `projects-data.js`, `skills-data.js`, `About.jsx`) is real and accurate — do not invent or summarise away real job entries. King Tide Marketing (Technical Operations Manager, Sept 2025) is the current role.
