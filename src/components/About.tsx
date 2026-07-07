import { profile, skillGroups } from "../content"
import { Section } from "./Section"

export function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          {profile.about.map((paragraph, i) => (
            <p
              key={i}
              className="reveal max-w-prose text-lg leading-relaxed text-bark dark:text-oat"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="reveal"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <h3 className="mb-3 font-mono text-[13px] tracking-widest text-stone uppercase dark:text-oat/70">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-espresso/15 px-3.5 py-1.5 text-sm text-bark transition-colors hover:border-clay hover:text-clay dark:border-bone/15 dark:text-oat dark:hover:border-ember dark:hover:text-ember"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
