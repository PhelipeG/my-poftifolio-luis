"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Phone } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Reveal } from "@/components/reveal"

const EASE = [0.22, 1, 0.36, 1] as const

export function Contact() {
  return (
    <section id="contato" className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <Reveal>
          <span className="section-label">06 — Contato</span>
        </Reveal>

        <motion.a
          href="mailto:luisphelipe1000@gmail.com"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
          className="group mt-8 block"
        >
          <span className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[1.02] tracking-tight text-foreground transition-colors duration-500 group-hover:text-accent">
            Vamos construir algo
            <br />
            juntos?
            <ArrowUpRight className="ml-4 inline-block h-[0.7em] w-[0.7em] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </span>
          <span className="mt-6 block font-mono text-sm tracking-wide text-muted transition-colors duration-300 group-hover:text-foreground">
            luisphelipe1000@gmail.com
          </span>
        </motion.a>

        <Reveal delay={0.25}>
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-10">
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <Phone size={15} className="text-accent" />
              (99) 99216-9563
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin size={15} className="text-accent" />
              Maranhão, Brasil · Remoto
            </span>
            <div className="ml-auto flex items-center gap-2">
              <a
                href="https://github.com/PhelipeG"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-felipe-silv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
            © {new Date().getFullYear()} Luis Felipe Guilhão
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
            Next.js · Tailwind · Framer Motion
          </p>
          <a
            href="#inicio"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </section>
  )
}
