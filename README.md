# samitha.dev — personal website

Personal portfolio for **Samitha Sheshan Dissanayake**, built with React 19, TypeScript, Vite 7 and Tailwind CSS 4. Earth-tone design (sand / espresso / clay / olive) with full light + dark mode, scroll-reveal animations and `prefers-reduced-motion` support.

## Editing content

All copy — name, tagline, about paragraphs, projects, skills, links — lives in **`src/content.ts`**. Edit that one file to update the site; no component changes needed.

Colors and fonts are defined as design tokens in **`src/index.css`** (`@theme` block).

## Commands

Node is installed locally at `~/.local/node` (not on PATH by default):

```sh
export PATH=~/.local/node/bin:$PATH

npm run dev       # dev server with hot reload
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Deploying

`npm run build` produces a fully static `dist/` folder — drop it on Vercel, Netlify, Cloudflare Pages or GitHub Pages as-is.
