import { Link } from "react-router"
import { posts } from "../lib/posts"
import { Section } from "./Section"
import { ArrowUpRightIcon } from "./Icons"

export function Writing() {
  const latest = posts.slice(0, 3)

  return (
    <Section id="writing" number="04" title="Writing">
      <ul className="divide-y divide-espresso/10 border-y border-espresso/10 dark:divide-bone/10 dark:border-bone/10">
        {latest.map((post, i) => (
          <li
            key={post.slug}
            className="reveal"
            style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group grid cursor-pointer gap-x-8 gap-y-2 py-7 sm:grid-cols-[1fr_auto] sm:items-baseline"
            >
              <div>
                <h3 className="flex items-center gap-3 font-display text-xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
                  {post.title}
                  <ArrowUpRightIcon className="size-4 shrink-0 text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-ember" />
                </h3>
                <p className="mt-1.5 max-w-xl leading-relaxed text-bark dark:text-oat">
                  {post.description}
                </p>
              </div>
              <span className="font-mono text-[13px] text-stone dark:text-oat/60">
                {post.dateFormatted}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="reveal mt-8">
        <Link
          to="/blog"
          className="group inline-flex cursor-pointer items-center gap-2 font-mono text-sm text-clay transition-colors hover:text-clay-deep dark:text-ember dark:hover:text-bone"
        >
          All posts
          <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </Section>
  )
}
