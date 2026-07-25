"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Server } from "lucide-react"
import { Reveal, SectionHeading } from "@/components/reveal"
import { technicalTestsData } from "@/data/technical-tests-data"

export function TechnicalTests() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
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

  return (
    <section
      id="testes"
      className="overflow-hidden border-t border-line bg-surface/40 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionHeading
              label="04 — Testes Técnicos"
              title="Aprovado na prática."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-muted">
                Desafios técnicos entregues em processos seletivos reais — cada
                um com repositório aberto para inspecionar arquitetura, testes e
                decisões de código.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Anterior"
              disabled={!canPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-all duration-300 hover:border-accent hover:text-accent disabled:opacity-30"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Próximo"
              disabled={!canNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-all duration-300 hover:border-accent hover:text-accent disabled:opacity-30"
            >
              <ArrowRight size={17} />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.2} y={48}>
        <div ref={emblaRef} className="mt-14">
          <div className="flex touch-pan-y pl-6 lg:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))]">
            {technicalTestsData.map((test) => (
              <article
                key={test.id}
                className="mr-6 flex min-w-0 flex-[0_0_86%] flex-col overflow-hidden rounded-2xl border border-line bg-background transition-colors duration-300 hover:border-accent/40 md:flex-[0_0_46%] lg:flex-[0_0_31%]"
              >
                <div className="group relative aspect-video overflow-hidden bg-elevated">
                  <Image
                    src={test.image}
                    alt={`Screenshot do teste técnico ${test.title}`}
                    fill
                    sizes="(max-width: 768px) 86vw, (max-width: 1024px) 46vw, 31vw"
                    className={`transition-transform duration-700 group-hover:scale-[1.04] ${
                      test.imageFit === "contain"
                        ? "object-contain p-4"
                        : "object-cover object-top"
                    }`}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {test.category}
                    </span>
                    <span className="h-px flex-1 bg-line" />
                    <span className="font-mono text-[10px] uppercase tracking-wide text-subtle">
                      {test.status}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">
                    {test.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{test.position}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-4">
                    {test.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {test.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-elevated px-2 py-1 font-mono text-[10px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {test.technologies.length > 5 && (
                      <span className="rounded-md px-2 py-1 font-mono text-[10px] text-subtle">
                        +{test.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-6">
                    {test.repositoryUrl && (
                      <a
                        href={test.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-foreground transition-colors hover:text-accent"
                      >
                        <Github size={13} />
                        Código
                      </a>
                    )}
                    {test.backendRepositoryUrl && (
                      <a
                        href={test.backendRepositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:text-accent"
                      >
                        <Server size={13} />
                        Backend
                      </a>
                    )}
                    {test.liveUrl && (
                      <a
                        href={test.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-accent transition-opacity hover:opacity-80"
                      >
                        <ExternalLink size={13} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
