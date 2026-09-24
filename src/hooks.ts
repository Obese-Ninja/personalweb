import { useEffect, useRef, useState, useSyncExternalStore } from "react"

/** Adds `.is-visible` to elements with `.reveal` inside the ref'd container as they scroll into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.querySelectorAll<HTMLElement>(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}

/* ---- Theme: one shared store so every toggle (button or hotkey) stays in sync ---- */

const themeListeners = new Set<() => void>()
const isDark = () => document.documentElement.classList.contains("dark")

export function setTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark)
  try {
    localStorage.setItem("theme", dark ? "dark" : "light")
  } catch {
    // Storage can be unavailable (private mode); the class change still applies.
  }
  themeListeners.forEach((listener) => listener())
}

export function useTheme() {
  const dark = useSyncExternalStore((onChange) => {
    themeListeners.add(onChange)
    return () => themeListeners.delete(onChange)
  }, isDark)

  return { dark, toggle: () => setTheme(!dark), setTheme }
}

/** Returns the id of the section currently in the middle of the viewport. */
export function useScrollSpy(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) {
      setActive(null)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids, enabled])

  return active
}

export function greeting(date = new Date()) {
  const hour = date.getHours()
  if (hour < 5) return "up late"
  if (hour < 12) return "good morning"
  if (hour < 17) return "good afternoon"
  return "good evening"
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
