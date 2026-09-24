import { Link } from "react-router"
import { posts } from "../lib/posts"
import { useReveal } from "../hooks"
import { DeskHeading, PageIcon, Sheet, SheetHeader } from "../components/Paper"
import { delay } from "../components/Section"

export function Blog() {
  const ref = useReveal<HTMLElement>()

  return (
    <main ref={ref} className="min-h-dvh pt-10 pb-24 lg:pt-16">
      <div className="reveal">
        <DeskHeading as="h1">writing</DeskHeading>
        <p className="mt-5 text-lg text-pencil">notes on security, networks &amp; software.</p>
      </div>

      <Sheet variant="lined" tiltDeg={-0.2} className="reveal mt-10 px-6 pt-8 pb-8 sm:px-10" style={delay(100)}>
        <SheetHeader
          title="all notes"
          aside={`${posts.length} ${posts.length === 1 ? "entry" : "entries"}`}
        />
        <ul>
          {posts.map((post, i) => (
            <li key={post.slug} className="reveal pt-8" style={delay(Math.min(i, 5) * 70)}>
              <Link
                to={`/blog/${post.slug}`}
                className="group grid gap-x-8 sm:grid-cols-[9rem_minmax(0,1fr)]"
              >
                <div className="text-sm leading-8 text-pencil">
                  <p>{post.dateFormatted.toLowerCase()}</p>
                  <p className="hidden sm:block">{post.readingMinutes} min read</p>
                </div>
                <div className="min-w-0">
                  <h2 className="flex items-start gap-2.5 text-[1.4rem] leading-8 font-bold transition-colors group-hover:text-blue-ink">
                    <PageIcon className="mt-1.5 size-5 shrink-0" />
                    <span>{post.title}</span>
                  </h2>
                  <p className="leading-8 text-pencil">{post.description}</p>
                  <p className="flex flex-wrap gap-x-4 leading-8">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-sm text-blue-ink">#{tag}</span>
                    ))}
                    <span className="ink-link ml-auto text-base">read</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Sheet>
    </main>
  )
}
