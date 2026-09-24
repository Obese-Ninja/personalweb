# samitha.dev — personal website

Personal portfolio for **Samitha Sheshan Dissanayake**, built with React 19, TypeScript, Vite 7 and Tailwind CSS 4. Pen-and-paper design: napkins, ruled notebook pages and index cards on a desk, handwritten type (Kalam, Patrick Hand, Courier Prime) and a hand-drawn padlock mascot. Day ink and night ink themes, single-key shortcuts (A, E, W, N, C, B, T, H), scroll-reveal animations and `prefers-reduced-motion` support.

## Editing content

All copy — name, tagline, about paragraphs, projects, skills, links — lives in **`src/content.ts`**. Edit that one file to update the site; no component changes needed.

Colors and fonts are defined as design tokens in **`src/index.css`** (`@theme` block).

## Writing a blog post

Posts are markdown files in **`src/posts/`** — the filename becomes the URL (`my-post.md` → `/blog/my-post`). Start each file with frontmatter:

```markdown
---
title: My next post
date: 2026-08-01
description: One sentence shown on the blog index.
tags: security, crowdstrike
---

Body in plain markdown…
```

Then commit and push — Vercel deploys it automatically:

```sh
git add src/posts/my-next-post.md
git commit -m "Post: my next post"
git push
```

The blog index at `/blog` sorts by `date` (newest first), and the home page shows the three most recent posts.

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
