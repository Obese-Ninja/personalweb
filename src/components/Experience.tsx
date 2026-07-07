import { experience } from "../content"
import { Section } from "./Section"

export function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <ol className="relative space-y-12 border-l border-espresso/10 pl-8 sm:pl-10 dark:border-bone/10">
        {experience.map((role, i) => (
          <li
            key={`${role.company}-${role.title}`}
            className="reveal relative"
            style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <span
              aria-hidden="true"
              className="absolute top-2 -left-8 size-2.5 -translate-x-[calc(50%+0.5px)] rounded-full bg-clay sm:-left-10 dark:bg-ember"
            />
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                {role.title}
              </h3>
              <span className="font-mono text-[13px] text-stone dark:text-oat/60">
                {role.period}
              </span>
            </div>
            <p className="mt-1 font-medium text-clay dark:text-ember">{role.company}</p>
            {role.note && (
              <p className="mt-0.5 font-mono text-[13px] text-stone dark:text-oat/60">{role.note}</p>
            )}
            <ul className="mt-3 max-w-2xl space-y-1.5 leading-relaxed text-bark dark:text-oat">
              {role.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-clay/50 dark:bg-ember/50" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
