import { useReveal } from "../hooks"

type SectionProps = {
  id: string
  className?: string
  children: React.ReactNode
}

/** A home-page section: anchor target plus scroll-reveal for its `.reveal` children. */
export function Section({ id, className = "", children }: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section id={id} ref={ref} className={`scroll-mt-32 py-10 sm:py-14 lg:scroll-mt-8 ${className}`}>
      {children}
    </section>
  )
}

/** Inline style helper for staggered reveal delays. */
export function delay(ms: number) {
  return { "--reveal-delay": `${ms}ms` } as React.CSSProperties
}
