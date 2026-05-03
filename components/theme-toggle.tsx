"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const dark = saved ? saved === "dark" : false
    document.documentElement.classList.toggle("dark", dark)
    setIsDark(dark)
    setMounted(true)
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="grid size-11 place-items-center rounded-2xl border-4 border-mario-brickDark bg-white text-[#1a1a1a] shadow-[inset_0_-4px_0_rgba(0,0,0,0.12)] transition-all hover:scale-105 dark:border-[#671010] dark:bg-[#1a0303] dark:text-white"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
