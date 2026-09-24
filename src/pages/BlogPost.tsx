import { Link, useParams } from "react-router"
import { getPost } from "../lib/posts"
import { useReveal } from "../hooks"
import { Critter, Sheet, Squiggle } from "../components/Paper"
import { delay } from "../components/Section"

export function BlogPost() {
  const { slug } = useParams()
  const ref = useReveal<HTMLElement>()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <main className="flex min-h-[80dvh] items-center py-16">
        <Sheet variant="napkin" tiltDeg={-1} className="mx-auto flex max-w-xl flex-col items-center px-10 py-12 text-center">
          <Critter className="w-28" flag="?" />
          <p className="mt-6 font-mono text-sm text-red-ink">404</p>
          <h1 className="mt-2 font-display text-4xl">no such note.</h1>
          <p className="mt-3 text-pencil">it may have been torn out of the notebook.</p>
          <Link to="/blog" className="ink-link mt-6 text-lg">
            ← back to all notes
          </Link>
        </Sheet>
      </main>
    )
  }

  return (
    <main ref={ref} className="min-h-dvh pt-10 pb-24 lg:pt-16">
      <article className="mx-auto max-w-[52rem]">
        <Link to="/blog" className="reveal ink-link text-lg">
          ← all notes
        </Link>

        <Sheet
          variant="napkin"
          className="sheet-smooth reveal mt-8 px-6 pt-10 pb-14 sm:px-14 sm:pt-14"
          style={delay(80)}
        >
          <header>
            <p className="text-pencil">
              {post.dateFormatted.toLowerCase()} · {post.readingMinutes} min read
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.12] text-balance">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <p className="mt-4 flex flex-wrap gap-x-4 text-blue-ink">
                {post.tags.map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </p>
            )}
          </header>

          <Squiggle className="mt-8" />

          <div
            className="prose-paper prose mt-6 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <p className="mt-12 text-right font-display text-2xl text-pencil">— samitha</p>
        </Sheet>
      </article>
    </main>
  )
}
