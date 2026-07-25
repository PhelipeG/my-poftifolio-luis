"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduce ? 0 : y,
        scale: reduce ? 1 : 0.985,
        filter: reduce ? "none" : "blur(10px)",
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

export function SectionHeading({
  label,
  title,
  className,
}: {
  label: string
  title: string
  className?: string
}) {
  return (
    <Reveal className={className}>
      <span className="section-label">{label}</span>
      <h2 className="section-title text-glow max-w-3xl text-balance">
        {title}
      </h2>
    </Reveal>
  )
}
