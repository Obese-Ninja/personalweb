import { Link } from "react-router"
import { experience, profile } from "../content"
import { posts } from "../lib/posts"
import { greeting, useReveal } from "../hooks"
import { buttonAccent, buttonInk, Critter, Kbd, Squiggle } from "./Paper"
import { delay } from "./Section"
import { useGoToSection } from "./Nav"

const tips = [
  { key: "W", label: "selected work" },
  { key: "B", label: "the blog" },
  { key: "C", label: "say hello" },
  { key: "T", label: "switch ink" },
]

export function Hero() {
  const ref = useReveal<HTMLElement>()
  const goTo = useGoToSection()
  const latest = posts[0]
  const current = experience[0]

  return (
    <section id="top" ref={ref} className="pt-6 lg:pt-14">
      <div className="reveal sheet sheet-napkin px-6 py-10 sm:px-12 sm:py-14 lg:px-14 xl:px-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
          <Critter wiggle className="w-24 shrink-0 sm:w-32 md:mt-12 lg:w-36" />

          <div className="min-w-0">
            <p className="reveal text-lg text-pencil" style={delay(60)}>
              {greeting()}, i'm {profile.firstName.toLowerCase()}.
            </p>

            <h1
              className="reveal mt-2 max-w-4xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] text-balance"
              style={delay(120)}
            >
              CyberSecurity engineer keeping <mark className="marker">enterprise &amp; banking</mark>{" "}
              environments safe — endpoint, network &amp; cloud.
            </h1>

            <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-pencil" style={delay(180)}>
              {profile.tagline}
            </p>

            <div className="reveal mt-9 flex flex-wrap gap-x-8 gap-y-6" style={delay(240)}>
              <div>
                <a
                  href="/#work"
                  onClick={(e) => {
                    e.preventDefault()
                    goTo("work")
                  }}
                  className={buttonAccent}
                >
                  see my work
                  <span className="hidden pointer-fine:inline-flex"><Kbd>W</Kbd></span>
                </a>
                <p className="mt-2 pl-3 text-sm text-pencil">projects on the table</p>
              </div>

              <div className="min-w-0">
                <Link to="/blog" className={buttonInk}>
                  read the blog
                </Link>
                {latest && (
                  <p className="mt-2 max-w-64 truncate pl-3 text-sm text-pencil">
                    latest: {latest.title.toLowerCase()}
                  </p>
                )}
              </div>
            </div>

            <p className="reveal mt-8 font-mono text-[0.95rem] text-pencil" style={delay(300)}>
              <span className="mr-1.5 font-hand text-xl font-bold text-green-ink">✓</span>
              <span className="text-green-ink">{current.title}</span> at {current.company}
            </p>
          </div>
        </div>

        <Squiggle className="mt-10 hidden pointer-fine:block" />

        <div className="mt-5 hidden flex-wrap pointer-fine:flex items-center gap-x-6 gap-y-3 text-pencil">
          <span className="font-bold">tip:</span>
          {tips.map((tip) => (
            <span key={tip.key} className="inline-flex items-center gap-2">
              <Kbd>{tip.key}</Kbd>
              {tip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
