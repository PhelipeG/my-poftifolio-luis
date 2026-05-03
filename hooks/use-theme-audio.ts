"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const TRACKS = {
  light: "/sounds/super-mario-theme.mp3",
  dark: "/sounds/koopa-castle-theme.mp3",
} as const

export type Theme = keyof typeof TRACKS

type UseThemeAudioOptions = {
  volume?: number
}

function readTheme(): Theme {
  if (typeof document === "undefined") return "light"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function useThemeAudio({ volume = 0.25 }: UseThemeAudioOptions = {}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [theme, setTheme] = useState<Theme>("light")
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const initialTheme = readTheme()
    const audio = new Audio(TRACKS[initialTheme])
    audio.loop = true
    audio.preload = "auto"
    audio.volume = volume
    audioRef.current = audio
    setTheme(initialTheme)

    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener("ended", handleEnded)

    const observer = new MutationObserver(() => {
      const next = readTheme()
      setTheme((prev) => (prev === next ? prev : next))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      observer.disconnect()
      audio.removeEventListener("ended", handleEnded)
      audio.pause()
      audio.src = ""
      audioRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) audio.volume = volume
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const nextSrc = TRACKS[theme]
    if (audio.src.endsWith(nextSrc)) return

    const wasPlaying = !audio.paused
    audio.src = nextSrc
    audio.load()

    if (wasPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }, [theme])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
      return
    }

    audio.pause()
    setIsPlaying(false)
  }, [])

  return { isPlaying, theme, toggle }
}
