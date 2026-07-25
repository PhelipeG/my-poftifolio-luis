"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Reveal, SectionHeading } from "@/components/reveal"
import { services } from "@/data/services-data"

const EASE = [0.22, 1, 0.36, 1] as const

export function Services() {
  const { serviceList } = services[0]

  return (
    <section id="servicos" className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
      <div
        aria-hidden="true"
        className="ambient-orb pointer-events-none absolute -left-52 bottom-10 h-72 w-72 opacity-25 [animation-delay:-5s]"
      />
      <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading label="05 — Serviços" title="Como posso ajudar." />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-muted">
              Soluções completas de desenvolvimento para produtos digitais — da
              interface ao deploy.
            </p>
          </Reveal>
        </div>

        <div>
          {serviceList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
              className="group relative flex items-start gap-6 overflow-hidden border-t border-line py-8 transition-all duration-500 last:border-b hover:border-accent/35 hover:pl-5 hover:shadow-[0_22px_55px_-42px_rgba(212,249,78,0.7)] lg:gap-10"
            >
              <span className="font-mono text-sm text-subtle transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_10px_rgba(212,249,78,0.75)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-foreground transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_14px_rgba(212,249,78,0.3)] lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
              <ArrowUpRight
                size={22}
                className="mt-1 shrink-0 text-subtle opacity-0 transition-all duration-300 group-hover:text-accent group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
