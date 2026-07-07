import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"

export default function App() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  )
}
