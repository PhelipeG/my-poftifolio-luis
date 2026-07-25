"use client"

import { ReactLenis } from "lenis/react"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        anchors: { offset: -96 },
      }}
    >
      {children}
    </ReactLenis>
  )
}
