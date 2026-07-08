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

`App.jsx` renders a persistent `Navbar` above the routes and a `Footer` below them. There are no global cursor/noise/magnetic overlay components — section entrance animations are driven per-component by the `useScroll` IntersectionObserver hook (`src/hooks/useScroll.js`), which toggles an `active`/in-view class.

**Design system (read these before touching styles):**
- `src/variables.css` — CSS custom properties for the palette and misc tokens. Colours are plain hex/rgb: `--light-blue: #427d9d` (the single accent), `--off-white: #fafafc`, `--black-light: #171717`, plus transition/easing/radius tokens. This is a calm, restrained blue-accent theme (NOT the previous oklch/violet system, which was reverted).
- `src/index.css` — imports the Lato font, `variables.css`, and Tailwind; holds the `#hero`/`#footer` radial-gradient backgrounds, all keyframe animations (`fade-left`, `slide-up`, `skew-animation`, `rotate-opacity`, etc.), and small shared classes (`.contact`, `.social-link`, `.box-shadow`, `.glass`). There is no `.h2`/`.display`/`.btn` helper layer — components style themselves with Tailwind utilities.
- `tailwind.config.cjs` — defines the named colours directly: `blackRaisin #171717`, `darkerBlackRaisin #090909`, `offWhite #fafafc`, `lightBlue #427D9D`, `liver #323232`; plus `boxShadow.custom` / `boxShadow.custom-dark`. Font family is Inter (sans). Dark mode uses the `selector` strategy.
- Use the Tailwind colour names above (`text-lightBlue`, `bg-offWhite`, `dark:bg-blackRaisin`, `shadow-custom`) rather than raw hex in components.

**Dark mode:** The `.dark` class lives on `<html>`. It is toggled by `Navbar.jsx` and persisted to `localStorage`. An inline script in `index.html` applies it before first paint to prevent flash.

**Data layer — three files under `src/data/`:**
- `jobs-data.js` — exports `eData` array. Each entry has: `id`, `era` (display date range, hyphen ranges like `"08/2021 - Present"` — no em-dashes), `title`, `titleAccent` (legacy, currently unused), `company`, `type` ("Freelance" | "Full Time"), `role`, `isCurrent` (boolean — drives the "Current" badge), `description`, `tags[]`. Rendered **reversed** (most recent first) by `WorkExperience.jsx` → `Experience.jsx`, which shows era, title, company, description, tag pills, and the type badge.
- `skills-data.js` — exports `skillCategories` array. Each entry has `id`, `slug`, `label` (currently NOT rendered — the cutesy taglines were intentionally dropped), `title`, `primary[]` (filled blue pill), `additional[]` (subtle pill). Rendered as a card grid in `Skills.jsx` → `Skill.jsx`.
- `projects-data.js` — default export array. Each entry has `id`, `title`, `stack[]`, `description`, `imgUrl`, `link`. The `/project/:name` route matches on `title`, so titles must stay unique.

**Section order in `Home.jsx`:** Hero → About → Portfolio → WorkExperience → Skills → Contact. `App.jsx` adds Navbar (top) and Footer (bottom). Sections are self-contained components, most with their own CSS file.

**Voice / content rules:** This is a real person's portfolio in a plain, human voice. Do NOT reintroduce "AI slop" — no em-dashes (use hyphens or rewrite), no editorial-magazine affectations (`§ 01` numbered markers, live clocks, `No. 002`, "Est." lines, cutesy category taglines), and avoid buzzwords ("ship", "leverage", "seamless", "robust"). Keep copy accurate to the real jobs/projects — never invent.

**Contact form:** `Contact.jsx` uses EmailJS (`service_wr38wju` / `template_39rbfk9` / public key `bXQK0o-7V-kRbDiXx`). On submit it calls `window.location.replace("/message")`.

**Assets:** All static assets (images, SVGs, CV PDF, logos) live in `public/assets/`. Reference them as `/assets/filename` — Vite serves `public/` at the root.

## Owner info

Built by Varant Kalemkerian. All information in the data files (`jobs-data.js`, `projects-data.js`, `skills-data.js`, `About.jsx`) is real and accurate — do not invent or summarise away real job entries. King Tide Marketing (Technical Operations Manager, Sept 2025) is the current role.
