"use client"

import { Pause, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function MarioThemeAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.25
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false))
  }, [])

  function toggleAudio() {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true))
      return
    }

    audio.pause()
    setIsPlaying(false)
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/super-mario-theme.mp3" loop />
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Pausar música tema" : "Tocar música tema"}
        className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-2xl border-4 border-mario-brickDark bg-mario-question text-mario-brickDark shadow-[inset_0_-4px_0_rgba(0,0,0,0.18),0_12px_30px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:bg-mario-red hover:text-white"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </>
  )
}
