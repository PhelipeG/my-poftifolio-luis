"use client"

import { motion } from "framer-motion"
import { Reveal, SectionHeading } from "@/components/reveal"
import { experience } from "@/data/experience-data"

const EASE = [0.22, 1, 0.36, 1] as const

export function Experience() {
  return (
    <section
      id="experiencia"
      className="luminous-rule relative overflow-hidden border-t border-line bg-surface/40"
    >
      <div
        aria-hidden="true"
        className="ambient-orb pointer-events-none absolute -right-48 top-1/4 h-80 w-80 opacity-30 [animation-delay:-2s]"
      />
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              label="02 — Experiência"
              title="Trajetória em movimento."
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm text-muted">
                Da primeira sprint como estagiário à entrega de features em
                produção como desenvolvedor pleno — cada etapa somou repertório
                técnico e visão de produto.
              </p>
            </Reveal>
          </div>

          <ol className="relative border-l border-accent/20 shadow-[-12px_0_40px_-30px_rgba(212,249,78,0.7)]">
            {experience.map((job, index) => (
              <motion.li
                key={`${job.title}-${job.date}`}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: EASE }}
                className="group relative pb-14 pl-10 transition-transform duration-500 hover:translate-x-2 last:pb-0"
              >
                <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-subtle ring-4 ring-background transition-all duration-300 group-hover:scale-125 group-hover:bg-accent group-hover:shadow-[0_0_18px_rgba(212,249,78,0.9)]" />

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {job.date}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_12px_rgba(212,249,78,0.25)]">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted">
                  {job.enterprise}
                </p>

                {Array.isArray(job.description) ? (
                  <ul className="mt-5 space-y-3">
                    {job.description.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span aria-hidden="true" className="mt-[7px] h-1 w-4 shrink-0 bg-accent/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 text-sm leading-relaxed text-muted">
                    {job.description}
                  </p>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
