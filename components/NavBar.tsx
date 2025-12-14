"use client"

import { useEffect } from "react"

const links = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function NavBar() {
  // 讓捲動變成 smooth（滑順），純體驗用
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth"
    }
  }, [])

  return (
    <header className="flex items-center justify-between">
      <a href="#top" className="font-semibold tracking-tight text-lg">
        Tim Chen
      </a>
      <nav className="flex gap-4 text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-slate-300 hover:text-sky-300 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}