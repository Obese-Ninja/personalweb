import { Link } from "react-router"
import { posts } from "../lib/posts"
import { PageIcon, Sheet, SheetHeader } from "./Paper"
import { delay, Section } from "./Section"

export function Writing() {
  const latest = posts.slice(0, 3)

  return (
    <Section id="writing">
      <Sheet variant="lined" tiltDeg={-0.2} className="reveal px-6 pt-8 pb-8 sm:px-10">
        <SheetHeader
          title="recent notes"
          aside={
            <Link to="/blog" className="ink-link text-base">
              all posts →
            </Link>
          }
        />

        <ul>
          {latest.map((post, i) => (
            <li key={post.slug} className="reveal pt-8" style={delay(i * 80)}>
              <Link
                to={`/blog/${post.slug}`}
                className="group grid gap-x-6 sm:grid-cols-[minmax(0,1fr)_auto]"
              >
                <div className="min-w-0">
                  <h3 className="flex items-center gap-2.5 text-[1.3rem] leading-8 font-bold transition-colors group-hover:text-blue-ink">
                    <PageIcon className="size-5 shrink-0" />
                    <span className="truncate">{post.title}</span>
                  </h3>
                  <p className="leading-8 text-pencil">{post.description}</p>
                </div>
                <div className="flex gap-4 text-sm leading-8 text-pencil sm:flex-col sm:items-end sm:gap-0">
                  <span>{post.dateFormatted.toLowerCase()}</span>
                  <span className="ink-link text-base">read</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Sheet>
    </Section>
  )
}
