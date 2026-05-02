import { info } from "@/data/info-data";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-[80vh] py-16">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
            contato
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-6xl font-extrabold leading-[0.9] md:text-8xl">
            Vamos tirar sua ideia do rascunho.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/62">
            Me chame para interfaces web, aplicativos mobile, melhorias de UI/UX,
            performance ou produtos digitais completos.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="mailto:luisphelipe1000@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-black transition-colors hover:bg-accent-hover"
            >
              <Mail size={18} />
              Enviar email
            </Link>
            <Link
              href="https://www.linkedin.com/in/luis-felipe-silv/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 font-semibold text-white transition-colors hover:border-accent hover:text-accent"
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
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="flex items-start gap-5">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-black">
                  <item.icon className="text-xl" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {item.title.replace(" :", "")}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-lg border border-accent/20 bg-accent/10 p-6">
            <div className="flex items-start gap-5">
              <MapPin className="mt-1 text-accent" />
              <div>
                <h2 className="font-display text-3xl font-bold">Remoto primeiro</h2>
                <p className="mt-3 text-white/62">
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
              className="grid size-12 place-items-center rounded-full border border-white/12 text-white transition-colors hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/luis-felipe-silv/"
              target="_blank"
              className="grid size-12 place-items-center rounded-full border border-white/12 text-white transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </Link>
            <Link
              href="mailto:luisphelipe1000@gmail.com"
              className="grid size-12 place-items-center rounded-full border border-white/12 text-white transition-colors hover:border-accent hover:text-accent"
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
