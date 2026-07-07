import { projects } from "../content"
import { Section } from "./Section"
import { ArrowUpRightIcon } from "./Icons"

export function Projects() {
  return (
    <Section id="work" number="02" title="Selected work">
      <ul className="divide-y divide-espresso/10 border-y border-espresso/10 dark:divide-bone/10 dark:border-bone/10">
        {projects.map((project, i) => (
          <li
            key={project.name}
            className="reveal"
            style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid cursor-pointer gap-x-8 gap-y-3 py-8 transition-colors sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:py-10"
            >
              <span className="font-mono text-sm text-stone transition-colors group-hover:text-clay dark:text-oat/60 dark:group-hover:text-ember">
                {project.index}
              </span>

              <div>
                <h3 className="flex items-center gap-3 font-display text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                  {project.name}
                  <ArrowUpRightIcon className="size-5 text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-ember" />
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-bark dark:text-oat">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[13px] text-stone dark:text-oat/70">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <span className="font-mono text-sm text-stone dark:text-oat/60">{project.year}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
