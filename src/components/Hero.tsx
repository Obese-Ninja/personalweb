import { profile } from "../content"
import { useReveal } from "../hooks"
import { ArrowUpRightIcon, socialIcons } from "./Icons"

export function Hero() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      {/* Ambient earth-tone glow, drifting slowly */}
      <div
        aria-hidden="true"
        className="animate-drift absolute -top-32 -right-40 size-[34rem] rounded-full bg-clay/15 blur-3xl dark:bg-ember/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-32 size-[30rem] rounded-full bg-olive/15 blur-3xl dark:bg-moss/10"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-20 sm:px-8">
        <p
          className="reveal font-mono text-[13px] tracking-widest text-bark uppercase dark:text-oat"
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          {profile.fullName} · {profile.location}
        </p>

        <h1
          className="reveal mt-6 max-w-4xl font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[1.04] font-medium tracking-tight text-balance"
          style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
        >
          Cybersecurity engineer keeping{" "}
          <em className="font-light text-clay italic dark:text-ember">enterprise &amp; banking</em>
          {" "}environments safe — endpoint, network &amp; cloud.
        </h1>

        <p
          className="reveal mt-8 max-w-xl text-lg leading-relaxed text-bark dark:text-oat"
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
        >
          {profile.tagline}
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center gap-4"
          style={{ "--reveal-delay": "270ms" } as React.CSSProperties}
        >
          <a
            href="#work"
            className="group inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-espresso px-6 font-medium text-parchment transition-colors hover:bg-clay dark:bg-bone dark:text-soil dark:hover:bg-ember"
          >
            See my work
            <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center gap-1">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.label]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-12 items-center justify-center rounded-full text-bark transition-all hover:-translate-y-0.5 hover:text-clay dark:text-oat dark:hover:text-ember"
                >
                  <Icon className="size-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-widest text-stone uppercase dark:text-oat/60"
      >
        scroll
      </p>
    </section>
  )
}
