"use client"

import { useEffect, useRef } from "react"
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "@/components/reveal"
import { about } from "@/data/about-data"
import { education } from "@/data/education-data"

const stats = [
  { value: 20, suffix: "+", label: "Projetos entregues" },
  { value: 35, suffix: "%", label: "Mais produtividade com automações" },
  { value: 40, suffix: "%", label: "Redução no tempo de resposta em apps" },
  { value: 3, suffix: "+", label: "Anos de experiência" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration: 1.8, ease: "easeOut" })
    return controls.stop
  }, [inView, count, value])

  return (
    <span ref={ref} className="text-glow font-display text-5xl font-bold text-foreground md:text-6xl">
      <motion.span>{rounded}</motion.span>
      <span className="text-accent drop-shadow-[0_0_14px_rgba(212,249,78,0.55)]">{suffix}</span>
    </span>
  )
}

export function About() {
  return (
    <section id="sobre" className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
      <div
        aria-hidden="true"
        className="ambient-orb pointer-events-none absolute -left-56 top-1/3 h-72 w-72 opacity-30 [animation-delay:-4s]"
      />
      <SectionHeading label="01 — Sobre" title="Código limpo, produto de verdade." />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              {about.description}
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 max-w-[220px] text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          <Reveal delay={0.15}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              Formação
            </h3>
            <ul className="mt-6">
              {education.items.map((edu) => (
                <li
                  key={edu.course}
                  className="group border-t border-line py-5 transition-all duration-300 last:border-b hover:border-accent/30 hover:bg-surface/60 hover:pl-3"
                >
                  <span className="font-mono text-xs text-accent">{edu.duration}</span>
                  <p className="mt-1.5 font-semibold text-foreground">{edu.course}</p>
                  <p className="mt-0.5 text-sm text-muted">{edu.institution}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              Tecnologias
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line px-3.5 py-1.5 text-xs text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_20px_-8px_rgba(212,249,78,0.65)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
