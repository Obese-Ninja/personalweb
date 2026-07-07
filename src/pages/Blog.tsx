import { Link } from "react-router"
import { posts } from "../lib/posts"
import { useReveal } from "../hooks"
import { ArrowUpRightIcon } from "../components/Icons"

export function Blog() {
  const ref = useReveal<HTMLElement>()

  return (
    <main ref={ref} className="mx-auto min-h-dvh max-w-6xl px-5 pt-36 pb-24 sm:px-8">
      <p className="reveal font-mono text-[13px] tracking-widest text-bark uppercase dark:text-oat">
        Notes on security, networks &amp; software
      </p>
      <h1 className="reveal mt-4 font-display text-5xl font-medium tracking-tight sm:text-6xl">
        Writing<span className="text-clay dark:text-ember">.</span>
      </h1>

      <ul className="mt-14 divide-y divide-espresso/10 border-y border-espresso/10 dark:divide-bone/10 dark:border-bone/10">
        {posts.map((post, i) => (
          <li
            key={post.slug}
            className="reveal"
            style={{ "--reveal-delay": `${Math.min(i, 5) * 70}ms` } as React.CSSProperties}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group grid cursor-pointer gap-x-8 gap-y-2 py-9 sm:grid-cols-[8.5rem_1fr] sm:items-baseline"
            >
              <div className="font-mono text-[13px] text-stone dark:text-oat/60">
                <p>{post.dateFormatted}</p>
                <p className="mt-1">{post.readingMinutes} min read</p>
              </div>
              <div>
                <h2 className="flex items-center gap-3 font-display text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                  {post.title}
                  <ArrowUpRightIcon className="size-5 shrink-0 text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-ember" />
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-bark dark:text-oat">
                  {post.description}
                </p>
                {post.tags.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-x-4 font-mono text-[13px] text-stone dark:text-oat/70">
                    {post.tags.map((tag) => (
                      <li key={tag}>#{tag}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
