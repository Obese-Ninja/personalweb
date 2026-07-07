import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"
import { Nav } from "./components/Nav"
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
    <div className="grain">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<BlogPost />} />
      </Routes>
    </div>
  )
}
