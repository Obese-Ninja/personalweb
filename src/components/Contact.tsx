import { profile } from "../content"
import { useReveal } from "../hooks"
import { MailIcon, socialIcons } from "./Icons"

export function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="scroll-mt-20 bg-parchment dark:bg-umber">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="reveal mb-12 flex items-baseline gap-4">
          <span className="font-mono text-sm text-clay dark:text-ember">04</span>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Contact</h2>
        </div>

        <p className="reveal max-w-2xl font-display text-[clamp(1.8rem,5vw,3.2rem)] leading-tight font-light text-balance">
          Have a project, a role, or just a good question?{" "}
          <em className="text-clay italic dark:text-ember">Say hello.</em>
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center gap-4"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex h-12 cursor-pointer items-center gap-2.5 rounded-full bg-clay px-6 font-medium text-parchment transition-colors hover:bg-clay-deep dark:bg-ember dark:text-soil dark:hover:bg-clay"
          >
            <MailIcon className="size-[18px]" />
            {profile.email}
          </a>

          {profile.socials.map((social) => {
            const Icon = socialIcons[social.label]
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex size-12 items-center justify-center rounded-full border border-espresso/15 text-bark transition-all hover:-translate-y-0.5 hover:border-clay hover:text-clay dark:border-bone/15 dark:text-oat dark:hover:border-ember dark:hover:text-ember"
              >
                <Icon className="size-5" />
              </a>
            )
          })}
        </div>
      </div>

      <footer className="border-t border-espresso/10 dark:border-bone/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 font-mono text-[13px] text-stone sm:px-8 dark:text-oat/60">
          <p>© {new Date().getFullYear()} {profile.fullName}</p>
          <p>Built with React, Vite &amp; Tailwind CSS</p>
        </div>
      </footer>
    </section>
  )
}
