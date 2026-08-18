# AGENTS.md

## Stack

- React 19 + Vite 7 (SWC plugin, no TypeScript)
- Tailwind CSS v4 via `@tailwindcss/vite` (not the PostCSS plugin)
- Framer Motion for animations, Formik + Yup for forms, EmailJS for contact
- ESM-only (`"type": "module"` in package.json)

## Commands

- `npm run dev` - Vite dev server
- `npm run build` - Production build (output: `dist/`)
- `npm run lint` - ESLint (flat config, see below)
- No test framework is installed. There are no tests.

## Lint

ESLint flat config at `eslint.config.js`. Key detail:
- `no-unused-vars` ignores variables starting with uppercase or `_` (`varsIgnorePattern: '^[A-Z_]'`)
- Ignores `dist/`
- Plugins: `react-hooks`, `react-refresh`

## Theming

Dual theme (light/dark) via `data-theme` attribute on `<html>`:
- CSS custom properties defined in `src/index.css` (`:root` for light, `[data-theme="dark"]` for dark)
- Brand accent: `#4169e1` (royal blue)
- Theme state managed by `src/context/ThemeContext.jsx` (React context, localStorage persistence)
- Components use `var(--bg)`, `var(--surface)`, `var(--accent)`, `var(--text-primary)`, `var(--text-muted)`, `var(--border)`, `var(--card-bg)` for theming
- `src/theme.js` also defines color palettes in JS but the CSS vars in `index.css` are the source of truth

## Architecture

Single-page portfolio site. All sections rendered in `src/App.jsx`:
- `SidebarLeft` - fixed left sidebar (desktop)
- `NavigationRight` - right navigation
- `ThemeToggle` - top-right floating toggle
- Hero, About, Skills, Experience, Projects, Contact, Footer sections
- `SectionHeader` - reusable section heading component
- `TypingText` - animated typing effect

Data: `src/data/projectData.js` exports `projectData` array with image imports from `src/assets/projects/`.

## Deployment

Vercel-style: `api/github-stats.js` is a serverless function (Node.js, not edge). Uses `process.env.VITE_GITHUB_TOKEN` for GitHub GraphQL API.
