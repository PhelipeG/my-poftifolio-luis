import { info } from "@/data/info-data";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-[80vh] py-16 text-[#111318] dark:text-white">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mario-coin">
            player link
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-6xl font-extrabold leading-[0.9] md:text-8xl">
            Press start para um novo projeto.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#4f5b70] dark:text-white/70">
            Me chame para interfaces web, aplicativos mobile, melhorias de UI/UX,
            performance ou produtos digitais completos.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="mailto:luisphelipe1000@gmail.com"
              className="pixel-corners inline-flex items-center gap-2 bg-mario-red px-6 py-3 font-bold text-white transition-colors hover:bg-accent-hover"
            >
              <Mail size={18} />
              Enviar email
            </Link>
            <Link
              href="https://www.linkedin.com/in/luis-felipe-silv/"
              target="_blank"
              className="pixel-corners inline-flex items-center gap-2 border-2 border-[#d7deea] bg-white px-6 py-3 font-semibold text-[#111318] transition-colors hover:border-mario-red hover:text-mario-red dark:border-[#671010] dark:bg-[#1b0505] dark:text-white dark:hover:text-mario-coin"
            >
              <Linkedin size={18} />
              Linkedin
            </Link>
          </div>
        </section>

        <section className="grid gap-4">
          {info.map((item) => (
            <div
              key={item.title}
              className="mario-panel pixel-corners p-6"
            >
              <div className="flex items-start gap-5">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mario-shell text-primary shadow-[inset_0_-4px_0_rgba(0,0,0,0.22)]">
                  <item.icon className="text-xl" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-mario-coin">
                    {item.title.replace(" :", "")}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#111318] dark:text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="mario-panel pixel-corners p-6">
            <div className="flex items-start gap-5">
              <MapPin className="mt-1 text-mario-yellow" />
              <div>
                <h2 className="font-display text-3xl font-bold">Remoto primeiro</h2>
                <p className="mt-3 text-[#4f5b70] dark:text-white/70">
                  Atendo projetos remotos, com comunicação objetiva e entregas
                  organizadas por escopo, prioridade e impacto.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="https://github.com/PhelipeG"
              target="_blank"
              className="grid size-12 place-items-center rounded-2xl border border-[#d7deea] bg-white text-[#111318] transition-colors hover:border-mario-red hover:text-mario-red dark:border-mario-red dark:bg-[#1b0505] dark:text-white dark:hover:border-mario-coin dark:hover:text-mario-coin"
              aria-label="GitHub"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/luis-felipe-silv/"
              target="_blank"
              className="grid size-12 place-items-center rounded-2xl border border-[#d7deea] bg-white text-[#111318] transition-colors hover:border-mario-red hover:text-mario-red dark:border-mario-red dark:bg-[#1b0505] dark:text-white dark:hover:border-mario-coin dark:hover:text-mario-coin"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </Link>
            <Link
              href="mailto:luisphelipe1000@gmail.com"
              className="grid size-12 place-items-center rounded-2xl border border-[#d7deea] bg-white text-[#111318] transition-colors hover:border-mario-red hover:text-mario-red dark:border-mario-red dark:bg-[#1b0505] dark:text-white dark:hover:border-mario-coin dark:hover:text-mario-coin"
              aria-label="Email"
            >
              <Send />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
