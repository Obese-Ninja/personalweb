import { useTheme } from "../hooks"
import { MoonIcon, SunIcon } from "./Icons"

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  const { dark, toggle } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-espresso/8 bg-sand/80 backdrop-blur-md dark:border-bone/8 dark:bg-soil/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-espresso transition-colors hover:text-clay dark:text-bone dark:hover:text-ember"
        >
          samitha<span className="text-clay dark:text-ember">.</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="group rounded-full px-3 py-2 font-mono text-[13px] text-bark transition-colors hover:text-clay dark:text-oat dark:hover:text-ember"
            >
              <span className="mr-1 text-clay/60 dark:text-ember/60">0{i + 1}</span>
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-1 flex size-11 cursor-pointer items-center justify-center rounded-full text-bark transition-colors hover:bg-linen hover:text-espresso dark:text-oat dark:hover:bg-char dark:hover:text-bone"
          >
            {dark ? <SunIcon className="size-[18px]" /> : <MoonIcon className="size-[18px]" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
