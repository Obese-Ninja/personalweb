import { marked } from "marked"

export type Post = {
  slug: string
  title: string
  date: string
  dateFormatted: string
  description: string
  tags: string[]
  readingMinutes: number
  html: string
}

/** Parses the `--- key: value ---` frontmatter block at the top of a post. */
function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!match) return { meta: {}, body: raw }

  const meta: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(":")
    if (colon === -1) continue
    meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
  }
  return { meta, body: raw.slice(match[0].length) }
}

function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

const files = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "")
    const { meta, body } = parseFrontmatter(raw)
    const words = body.split(/\s+/).filter(Boolean).length
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "1970-01-01",
      dateFormatted: formatDate(meta.date ?? ""),
      description: meta.description ?? "",
      tags: meta.tags ? meta.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      readingMinutes: Math.max(1, Math.round(words / 200)),
      html: marked.parse(body, { async: false }),
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
