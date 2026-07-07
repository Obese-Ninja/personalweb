import { useEffect } from "react"
import { useLocation } from "react-router"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Experience } from "../components/Experience"
import { Projects } from "../components/Projects"
import { Writing } from "../components/Writing"
import { Contact } from "../components/Contact"

export function Home() {
  const { hash } = useLocation()

  // Landing on /#section from another page: scroll once content has rendered
  useEffect(() => {
    if (!hash) return
    document.querySelector(hash)?.scrollIntoView()
  }, [hash])

  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
      </main>
      <Contact />
    </>
  )
}
