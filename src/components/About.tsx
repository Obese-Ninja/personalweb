import { education, profile, skillGroups } from "../content"
import { Sheet, SheetHeader } from "./Paper"
import { delay, Section } from "./Section"

const cardTilts = [-1.1, 0.8, -0.5]

export function About() {
  return (
    <Section id="about">
      <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] xl:gap-12">
        <Sheet variant="lined" tiltDeg={-0.25} className="reveal px-6 pt-8 pb-8 sm:px-10">
          <SheetHeader title="about me" aside="p. 1" />
          <div className="space-y-8 pt-8">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="max-w-[62ch] text-[1.12rem] leading-8">
                {paragraph}
              </p>
            ))}
          </div>

          <h3 className="mt-8 text-lg leading-8 font-bold text-accent-ink">education</h3>
          <ul>
            {education.map((item) => (
              <li key={item.degree} className="leading-8">
                <span className="font-bold">{item.degree}</span>
                <span className="text-pencil"> — {item.school}</span>
              </li>
            ))}
          </ul>
        </Sheet>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-1 xl:pt-4">
          {skillGroups.map((group, i) => {
            const isCerts = group.title === "Certifications"
            return (
              <Sheet
                key={group.title}
                variant="card"
                tiltDeg={cardTilts[i % cardTilts.length]}
                className={`reveal tape px-6 pt-7 pb-6 ${isCerts ? "sm:col-span-2 xl:col-span-1" : ""}`}
                style={delay(i * 90)}
              >
                <h3 className="w-fit text-lg font-bold">
                  <span className="scribble [--scribble-color:var(--color-accent)]">
                    {group.title.toLowerCase()}
                  </span>
                </h3>
                <ul className="mt-4 space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2.5 leading-snug">
                      <span aria-hidden="true" className={isCerts ? "font-bold text-green-ink" : "text-faint"}>
                        {isCerts ? "✓" : "–"}
                      </span>
                      <span className={isCerts ? "" : "text-pencil"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </Sheet>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
