"use client";

import ProjectFilter from "@/components/project-filter";
import { projectsData } from "@/data/projects-data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects =
    activeFilter === "Todos"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <main className="min-h-[80vh] py-16">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        <section className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mario-coin">
              world select
            </p>
            <h1 className="mt-5 font-display text-6xl font-extrabold leading-[0.9] md:text-8xl">
              Projetos em modo plataforma.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/62 lg:ml-auto">
            Web apps, mobile apps e interfaces completas usando React, Next.js,
            Vue, Nuxt, Angular, React Native e Flutter.
          </p>
        </section>

        <ProjectFilter
          selectedCategory={activeFilter}
          onCategoryChange={setActiveFilter}
        />

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="mario-panel pixel-corners group overflow-hidden transition-colors hover:border-mario-red"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white/[0.03]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 760px"
                  priority={index < 2}
                  quality={78}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 top-4 rounded-2xl border border-mario-shell/20 bg-primary/80 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-mario-yellow backdrop-blur">
                  {project.category}
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-display text-3xl font-bold leading-none text-white">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/62">
                      {project.description}
                    </p>
                  </div>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      aria-label={`Abrir ${project.title}`}
                      className="grid size-11 shrink-0 place-items-center rounded-2xl bg-mario-red text-white transition-colors hover:bg-accent-hover"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack?.map((item) => (
                    <span
                      key={item.name}
                      className="rounded-full border border-mario-shell/15 px-3 py-1 text-xs font-medium text-white/72"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-mario-coin transition-colors hover:text-accent-hover"
                  >
                    <Github size={17} />
                    Ver repositório
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
