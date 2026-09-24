import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"
import { Hotkeys, Sidebar, TopBar } from "./components/Nav"
import { SketchFilters } from "./components/Paper"
import { Home } from "./pages/Home"
import { Blog } from "./pages/Blog"
import { BlogPost } from "./pages/BlogPost"

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="grain min-h-dvh overflow-x-clip">
      <SketchFilters />
      <ScrollToTop />
      <Hotkeys />
      <a
        href="#content"
        className="sketch sr-only z-50 bg-paper px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12 lg:px-8 xl:gap-16">
        <Sidebar />
        <div className="min-w-0">
          <TopBar />
          <div id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<BlogPost />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
