import { useCallback, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router"
import { profile } from "../content"
import { posts } from "../lib/posts"
import { prefersReducedMotion, useScrollSpy, useTheme } from "../hooks"
import { buttonAccent, Critter, Kbd, PageIcon, Squiggle } from "./Paper"

/** Home-page sections, in order, with their single-key shortcut. */
export const sections = [
  { id: "about", label: "about", key: "a" },
  { id: "experience", label: "experience", key: "e" },
  { id: "work", label: "work", key: "w" },
  { id: "writing", label: "writing", key: "n" },
  { id: "contact", label: "contact", key: "c" },
] as const

const sectionIds = sections.map((s) => s.id)

/** Scrolls to a home-page section, navigating home first if needed. */
export function useGoToSection() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return useCallback(
    (id: string) => {
      if (pathname === "/") {
        document.getElementById(id)?.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        })
      } else {
        navigate(`/#${id}`)
      }
    },
    [navigate, pathname],
  )
}

/** Single-letter keyboard shortcuts, ignored while typing or with modifier keys. */
export function Hotkeys() {
  const goTo = useGoToSection()
  const navigate = useNavigate()
  const { toggle } = useTheme()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return
      const target = e.target as HTMLElement
      if (target.closest("input, textarea, select, [contenteditable]")) return

      const key = e.key.toLowerCase()
      const section = sections.find((s) => s.key === key)
      if (section) goTo(section.id)
      else if (key === "b") navigate("/blog")
      else if (key === "h") {
        navigate("/")
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" })
      } else if (key === "t") toggle()
      else return
      e.preventDefault()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [goTo, navigate, toggle])

  return null
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Home">
      <span className="font-display text-[2.1rem] leading-none text-ink">
        <span className="scribble">samitha</span>
      </span>
      <Critter className="w-10 transition-transform duration-300 group-hover:-rotate-6" />
    </Link>
  )
}

function InkToggle() {
  const { dark, setTheme } = useTheme()
  const option = (label: string, value: boolean) => (
    <button
      type="button"
      onClick={() => setTheme(value)}
      aria-pressed={dark === value}
      className={`cursor-pointer px-1 text-base transition-colors ${
        dark === value ? "scribble font-bold text-ink" : "text-faint hover:text-pencil"
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-pencil">ink:</span>
      {option("day", false)}
      {option("night", true)}
      <Kbd className="ml-auto">T</Kbd>
    </div>
  )
}

/** Desktop: a tear-off notepad pinned to the left of the desk. */
export function Sidebar() {
  const { pathname } = useLocation()
  const goTo = useGoToSection()
  const active = useScrollSpy(sectionIds, pathname === "/")
  const onBlog = pathname.startsWith("/blog")

  return (
    <aside className="sticky top-0 hidden max-h-dvh overflow-y-auto py-5 lg:block">
      <div className="sheet sheet-lined sheet-perforated flex min-h-[calc(100dvh-2.5rem)] flex-col px-6 pt-10 pb-6">
        <Logo />
        <p className="mt-3 text-sm leading-8 text-pencil">{profile.role.toLowerCase()} · {profile.location.toLowerCase()}</p>

        <div className="mt-3 flex items-center gap-3">
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault()
              goTo("contact")
            }}
            className={`${buttonAccent} h-10 px-5 text-base`}
          >
            + say hello
          </a>
          <Kbd>C</Kbd>
        </div>

        <nav aria-label="Sections" className="mt-7">
          <p className="w-fit text-sm font-bold text-pencil">
            <span className="scribble">contents</span>
          </p>
          <ul className="mt-3">
            {sections.map((s) => {
              const isActive = active === s.id
              return (
                <li key={s.id}>
                  <a
                    href={`/#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      goTo(s.id)
                    }}
                    aria-current={isActive ? "location" : undefined}
                    className={`group flex h-8 items-center gap-2 rounded-sm px-2 text-lg transition-colors ${
                      isActive ? "hatch text-ink" : "text-pencil hover:text-ink"
                    }`}
                  >
                    <span className="w-4 text-faint transition-colors group-hover:text-accent">
                      {isActive ? "›" : "–"}
                    </span>
                    {s.label}
                    <span className="ml-auto font-mono text-xs text-faint uppercase">{s.key}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <Squiggle className="my-6" />

        <div>
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className={`text-sm font-bold transition-colors hover:text-ink ${onBlog ? "text-ink" : "text-pencil"}`}
            >
              <span className="scribble">notes &amp; posts</span>
            </Link>
            <Kbd>B</Kbd>
          </div>
          <ul className="mt-3">
            {posts.slice(0, 4).map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className={`flex h-8 items-center gap-2 transition-colors hover:text-ink ${
                    pathname === `/blog/${post.slug}` ? "text-ink" : "text-pencil"
                  }`}
                >
                  <PageIcon className="size-4 shrink-0" />
                  <span className="truncate">{post.title.toLowerCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-8">
          <p aria-hidden="true" className="text-center tracking-[0.5em] text-faint">• • •</p>
          <div className="mt-4">
            <InkToggle />
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="ink-link text-base">
                  {s.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

/** Mobile & tablet: a strip of paper across the top. */
export function TopBar() {
  const goTo = useGoToSection()
  const { dark, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-40 -mx-4 bg-desk px-4 pt-2 pb-1 sm:-mx-6 sm:px-6 lg:hidden">
      <div className="sheet px-4 pt-2 pb-1">
        <div className="flex h-12 items-center justify-between">
          <Link to="/" className="font-display text-[1.7rem] leading-none" aria-label="Home">
            <span className="scribble">samitha</span>
          </Link>
          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? "Switch to day ink" : "Switch to night ink"}
            className="sketch sketch-thin flex h-9 cursor-pointer items-center px-3 text-sm text-pencil"
          >
            {dark ? "day ink" : "night ink"}
          </button>
        </div>
        <nav aria-label="Sections" className="-mx-1 flex gap-1 overflow-x-auto pb-1">
          {sections
            .filter((s) => s.id !== "experience")
            .map((s) => (
              <a
                key={s.id}
                href={`/#${s.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  goTo(s.id)
                }}
                className="flex h-10 shrink-0 items-center px-2 text-pencil transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          <Link to="/blog" className="flex h-10 shrink-0 items-center px-2 text-pencil hover:text-ink">
            blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
