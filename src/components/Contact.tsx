import { profile } from "../content"
import { useReveal } from "../hooks"
import { buttonAccent, Critter, Sheet } from "./Paper"

export function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="scroll-mt-32 pt-10 pb-8 sm:pt-14 lg:scroll-mt-8">
      <Sheet
        variant="napkin"
        tiltDeg={0.35}
        className="reveal grid gap-10 px-7 py-10 sm:px-12 sm:py-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-0"
      >
        <div className="md:pr-10">
          <p className="text-lg text-pencil">dear reader,</p>
          <p className="mt-4 font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-tight text-balance">
            Have a project, a role, or just a good question? <mark className="marker">Say hello.</mark>
          </p>
          <a href={`mailto:${profile.email}`} className={`${buttonAccent} mt-8`}>
            write to me
          </a>
          <p className="mt-8 font-display text-2xl text-pencil">— {profile.firstName.toLowerCase()}</p>
        </div>

        <div className="relative md:border-l md:border-dashed md:border-rule md:pl-10">
          <div className="sketch sketch-thin mr-2 ml-auto flex w-24 flex-col items-center gap-1 px-2 pt-3 pb-2 text-accent-ink rotate-3">
            <Critter className="w-14" />
            <span className="font-mono text-[10px] tracking-widest uppercase">{profile.location}</span>
          </div>

          <dl className="mt-6">
            <div className="flex flex-col gap-x-3 border-b border-rule py-1.5 sm:flex-row sm:items-baseline">
              <dt className="w-14 shrink-0 text-sm text-pencil">to:</dt>
              <dd className="min-w-0 break-all">
                <a href={`mailto:${profile.email}`} className="ink-link">
                  {profile.email}
                </a>
              </dd>
            </div>
            {profile.socials.map((social) => (
              <div key={social.label} className="flex flex-col gap-x-3 border-b border-rule py-1.5 sm:flex-row sm:items-baseline">
                <dt className="w-14 shrink-0 text-sm text-pencil">{social.label.toLowerCase()}:</dt>
                <dd className="min-w-0">
                  <a href={social.href} target="_blank" rel="noreferrer" className="ink-link">
                    {social.href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Sheet>

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 px-1 text-sm text-pencil">
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <p>drawn with react, vite &amp; tailwind css</p>
      </footer>
    </section>
  )
}
