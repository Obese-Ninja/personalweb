import { useReveal } from "../hooks"

type SectionProps = {
  id: string
  number: string
  title: string
  children: React.ReactNode
}

export function Section({ id, number, title, children }: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section id={id} ref={ref} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <div className="reveal mb-12 flex items-baseline gap-4 sm:mb-16">
        <span className="font-mono text-sm text-clay dark:text-ember">{number}</span>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
        <div className="ml-2 h-px flex-1 bg-espresso/10 dark:bg-bone/10" />
      </div>
      {children}
    </section>
  )
}
