"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { skills } from "@/data/skills-data"

const EASE = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

export function Hero() {
  const skillNames = skills[0].skillList.map((skill) => skill.name)

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-32"
    >
      <div
        aria-hidden="true"
        className="ambient-orb pointer-events-none absolute -right-32 top-16 h-[520px] w-[520px]"
      />
      <div
        aria-hidden="true"
        className="ambient-orb pointer-events-none absolute -left-52 top-1/3 h-[360px] w-[360px] opacity-30 [animation-delay:-3s]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10"
      >
        <div>
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              Disponível para novos projetos
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-glow mt-8 font-display text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-tight text-foreground"
          >
            Luis Felipe
            <br />
            <span className="text-gradient-shine">Guilhão</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Desenvolvedor <span className="text-foreground">front-end</span> e{" "}
            <span className="text-foreground">mobile</span> construindo
            interfaces rápidas, acessíveis e com acabamento de produto — do
            protótipo no Figma ao deploy em produção.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projetos"
              className="button-shine group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-background transition-transform duration-300 hover:scale-[1.04]"
            >
              Ver projetos
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/pdf/LuisFelipeGSilva.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_28px_-10px_rgba(212,249,78,0.7)]"
            >
              Baixar CV
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/PhelipeG"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_0_24px_-8px_rgba(212,249,78,0.8)]"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-felipe-silv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_0_24px_-8px_rgba(212,249,78,0.8)]"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-[380px] lg:max-w-none"
        >
          <div className="glow-accent group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-black transition-all duration-700 hover:border-accent/50">
            <Image
              src="/images/hero-portrait.png"
              alt="Foto de Luis Felipe Guilhão"
              fill
              priority
              sizes="(max-width: 1024px) 380px, 480px"
              className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-70" />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-surface px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Front-end · Mobile · Fullstack
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="mt-20"
      >
        <div className="flex justify-center pb-6">
          <a
            href="#sobre"
            aria-label="Rolar para a seção sobre"
            className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-line text-muted"
          >
            <ArrowDown size={16} />
          </a>
        </div>

        <div className="mask-fade-x overflow-hidden border-y border-line py-5">
          <div className="flex w-max animate-marquee gap-12">
            {[...skillNames, ...skillNames].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="flex items-center gap-12 font-mono text-xs uppercase tracking-[0.25em] text-subtle"
              >
                {name}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
