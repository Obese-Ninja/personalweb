import { Link, useParams } from "react-router"
import { getPost } from "../lib/posts"
import { useReveal } from "../hooks"

export function BlogPost() {
  const { slug } = useParams()
  const ref = useReveal<HTMLElement>()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-3xl flex-col items-start justify-center px-5 sm:px-8">
        <p className="font-mono text-sm text-clay dark:text-ember">404</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">
          No such post.
        </h1>
        <Link
          to="/blog"
          className="mt-6 cursor-pointer font-mono text-sm text-clay underline underline-offset-4 hover:text-clay-deep dark:text-ember dark:hover:text-bone"
        >
          Back to all posts
        </Link>
      </main>
    )
  }

  return (
    <main ref={ref} className="mx-auto min-h-dvh max-w-3xl px-5 pt-36 pb-24 sm:px-8">
      <article>
        <header className="reveal">
          <Link
            to="/blog"
            className="cursor-pointer font-mono text-[13px] tracking-widest text-stone uppercase transition-colors hover:text-clay dark:text-oat/70 dark:hover:text-ember"
          >
            ← All posts
          </Link>
          <h1 className="mt-6 font-display text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 font-mono text-[13px] text-stone dark:text-oat/60">
            {post.dateFormatted} · {post.readingMinutes} min read
            {post.tags.length > 0 && <> · {post.tags.map((t) => `#${t}`).join(" ")}</>}
          </p>
        </header>

        <div
          className="prose-earth prose prose-lg reveal mt-10 max-w-none"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  )
}
