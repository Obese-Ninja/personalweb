import { experience } from "../content"
import { Critter, Sheet, SheetHeader } from "./Paper"
import { delay, Section } from "./Section"

export function Experience() {
  return (
    <Section id="experience">
      <Sheet variant="lined" tiltDeg={0.2} className="reveal px-6 pt-8 pb-8 sm:px-10">
        <SheetHeader title="experience" aside="p. 2 · since 2020" />

        <ol>
          {experience.map((role, i) => {
            const current = role.period.toLowerCase().includes("present")
            return (
              <li
                key={`${role.company}-${role.title}`}
                className="reveal grid gap-x-4 pt-8 sm:grid-cols-[2.5rem_minmax(0,1fr)_auto]"
                style={delay(i * 80)}
              >
                <Critter className="mt-1 hidden w-10 sm:block" flag={i === 0 ? "!" : undefined} />

                <div className="min-w-0">
                  <h3 className="text-[1.35rem] leading-8 font-bold">{role.title}</h3>
                  <p className="leading-8 text-accent-ink">
                    {role.company}
                    {role.note && <span className="text-sm text-pencil"> · {role.note}</span>}
                  </p>
                  <ul>
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-2.5 leading-8 text-pencil">
                        <span aria-hidden="true" className="text-faint">–</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="order-first text-sm leading-8 text-pencil sm:order-none sm:text-right">
                  {role.period.toLowerCase()}
                  {current && i === 0 && <span className="font-bold text-red-ink"> · now</span>}
                </p>
              </li>
            )
          })}
        </ol>
      </Sheet>
    </Section>
  )
}
