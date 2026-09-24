import { projects } from "../content"
import { Critter, DeskHeading, sheetClass, tilt } from "./Paper"
import { delay, Section } from "./Section"

const tilts = [-1.2, 0.9, 0.7, -0.8]
const flags = [undefined, "✓", undefined, "?"]

function linkLabel(href: string) {
  return href.includes("github.com") ? "view source ↗" : "visit site ↗"
}

export function Projects() {
  return (
    <Section id="work" className="relative">
      <div className="reveal">
        <DeskHeading>on the table</DeskHeading>
        <p className="mt-4 text-pencil">things i've built, left out on the desk.</p>
      </div>

      <ul className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
        {projects.map((project, i) => (
          <li key={project.name} className="reveal" style={delay(i * 90)}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              style={tilt(tilts[i % tilts.length])}
              className={sheetClass(
                "napkin",
                "group flex h-full cursor-pointer flex-col px-7 pt-7 pb-8 hover:-translate-y-1 hover:[--tilt:0deg]",
              )}
            >
              <div className="flex items-start gap-3">
                <Critter className="w-12 shrink-0" flag={flags[i % flags.length]} />
                <div>
                  <h3 className="text-2xl leading-tight font-bold">{project.name}</h3>
                  <p className="text-sm text-pencil">{project.year}</p>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-pencil">{project.description}</p>
              <p className="mt-4 font-mono text-[13px] text-faint">{project.stack.join(" · ")}</p>
              <span className="mt-auto pt-5">
                <span className="ink-link">{linkLabel(project.href)}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div aria-hidden="true" className="coffee-ring pointer-events-none absolute -right-10 -bottom-6 hidden size-44 md:block" />
    </Section>
  )
}
