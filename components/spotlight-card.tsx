"use client"

import type { CSSProperties, PointerEvent, ReactNode } from "react"

interface SpotlightCardProps {
  children: ReactNode
  className?: string
}

type SpotlightStyle = CSSProperties & {
  "--mouse-x": string
  "--mouse-y": string
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`)
  }

  const initialPosition: SpotlightStyle = {
    "--mouse-x": "50%",
    "--mouse-y": "50%",
  }

  return (
    <div
      className={`surface-glow ${className}`}
      onPointerMove={handlePointerMove}
      style={initialPosition}
    >
      {children}
    </div>
  )
}
