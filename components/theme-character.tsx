"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ThemeCharacter() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark"))
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  const src = isDark ? "/images/koopa.gif" : "/images/yoshi.gif"
  const name = isDark ? "Koopa" : "Yoshi"
  const desc = isDark ? "Vilão do castelo de fogo" : "Parceiro oficial dessa fase"

  return (
    <div className="mario-panel pixel-corners mt-6 overflow-hidden p-4">
      <div className="grid grid-cols-[88px_1fr] items-center gap-4">
        <div className="relative size-[88px] rounded-xl border-2 border-black/10 bg-mario-sky/20 dark:border-white/20 dark:bg-[#2d0f0f]">
          <Image src={src} alt={`${name} animado`} fill className="rounded-lg object-cover" unoptimized />
        </div>
        <div>
          <p className="font-display text-2xl font-bold text-[#111318] dark:text-white">{name}</p>
          <p className="text-sm text-[#4f5b70] dark:text-[#d7dbdf]">{desc}</p>
        </div>
      </div>
    </div>
  )
}
