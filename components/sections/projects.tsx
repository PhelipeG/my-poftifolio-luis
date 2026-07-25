"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react"
import { Reveal, SectionHeading } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { projectsData } from "@/data/projects-data"

const filters = ["Todos", "Web", "Mobile"] as const
type Filter = (typeof filters)[number]

export function Projects() {
  const [filter, setFilter] = useState<Filter>("Todos")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const projects = useMemo(
    () =>
      filter === "Todos"
        ? projectsData
        : projectsData.filter((project) => project.category === filter),
    [filter]
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
  })

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    // Volta ao primeiro slide quando o filtro muda; o evento "select"
    // do embla atualiza o selectedIndex.
    if (!emblaApi) return
    emblaApi.scrollTo(0, true)
  }, [emblaApi, filter])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="projetos" className="overflow-hidden py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            label="03 — Projetos"
            title="Trabalhos selecionados."
          />

          <Reveal delay={0.1} className="flex flex-wrap items-center gap-6">
            <div className="flex gap-2">
              {filters.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  className={`rounded-full px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ${
                    filter === option
                      ? "bg-accent text-background"
                      : "border border-line text-muted hover:border-accent/60 hover:text-foreground"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tabular-nums text-muted">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Projeto anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-all duration-300 hover:border-accent hover:text-accent disabled:opacity-30"
                disabled={selectedIndex === 0}
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Próximo projeto"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-all duration-300 hover:border-accent hover:text-accent disabled:opacity-30"
                disabled={selectedIndex === projects.length - 1}
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.2} y={48}>
        <div ref={emblaRef} className="mt-14">
          <div className="flex touch-pan-y pl-6 lg:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))]">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="mr-6 min-w-0 flex-[0_0_88%] md:flex-[0_0_72%] lg:mr-10 lg:flex-[0_0_62%]"
              >
                <SpotlightCard className="h-full overflow-hidden rounded-2xl border border-line">
                  <motion.div
                    animate={{
                      opacity: index === selectedIndex ? 1 : 0.35,
                      scale: index === selectedIndex ? 1 : 0.97,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="grid h-full bg-surface lg:grid-cols-[1.05fr_0.95fr]"
                  >
                    <div className="group relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                    <Image
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      fill
                      sizes="(max-width: 1024px) 88vw, 40vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent lg:bg-gradient-to-r" />
                    </div>

                    <div className="flex flex-col p-7 lg:p-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                        {project.category}
                      </span>
                      <span className="text-glow font-display text-4xl font-bold text-accent/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-glow mt-4 font-display text-2xl font-bold text-foreground lg:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech.name}
                          className="rounded-md bg-elevated px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                        >
                          {tech.name.trim()}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:text-accent"
                        >
                          Ver projeto
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                          <Lock size={13} />
                          Repositório privado
                        </span>
                      )}
                    </div>
                    </div>
                  </motion.div>
                </SpotlightCard>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
