---
title: Hello, world — and how this blog works
date: 2026-07-06
description: The first post, and a short guide to publishing here — write markdown, git push, done.
tags: meta, writing
---

Welcome. This is where I'll write about the things I spend my days on — endpoint security, incident response, networks, cloud, and the occasional side project that refuses to stay small.

To kick things off, here's how this blog actually works — because the publishing pipeline is pleasingly boring.

## Writing a post

Every post is a markdown file in `src/posts/`. The filename becomes the URL, so `zero-trust-notes.md` is served at `/blog/zero-trust-notes`. Each file starts with a small frontmatter block:

```markdown
---
title: My next post
date: 2026-08-01
description: One sentence shown on the blog index.
tags: security, crowdstrike
---

The post body, in plain markdown…
```

## Publishing

There is no CMS, no database, no admin panel to get compromised — a design choice I can stand behind professionally:

```sh
git add src/posts/my-next-post.md
git commit -m "Post: my next post"
git push
```

Vercel picks up the push and the post is live in about fifteen seconds. That's the whole workflow.

## What to expect here

Notes from the field: what actually happens during incident response engagements (suitably anonymised), configuration pitfalls I keep seeing in endpoint and network security platforms, and write-ups of whatever I'm building on the side. If any of that sounds useful, check back — or just watch the [repo](https://github.com/Obese-Ninja/personalweb).
