"use client"

import { Pause, Play } from "lucide-react"

import { useThemeAudio } from "@/hooks/use-theme-audio"

export default function MarioThemeAudio() {
  const { isPlaying, toggle } = useThemeAudio({ volume: 0.15 })

  return (
    <button
      onClick={toggle}
      aria-label={isPlaying ? "Pausar música tema" : "Tocar música tema"}
      className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-2xl border-4 border-mario-brickDark bg-mario-question text-mario-brickDark shadow-[inset_0_-4px_0_rgba(0,0,0,0.18),0_12px_30px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:bg-mario-red hover:text-white"
    >
      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
    </button>
  )
}
