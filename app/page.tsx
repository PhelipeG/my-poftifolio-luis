import { ProfilePic } from "../components/profile-pic";
import { Social } from "../components/social-links";
import CarrouselSkills from "@/components/carrousel-skills";
import ServicesSection from "@/components/services-section";
import DownloadButton from "@/components/ui/download-button";
import ContactButton from "@/components/ui/contact-button";
import { ArrowUpRight, Cpu, Layers3, Smartphone } from "lucide-react";

export default function Home() {
  const highlights = [
    { value: "20+", label: "projetos web e mobile" },
    { value: "35%", label: "ganho com automações" },
    { value: "40%", label: "redução em tempo de resposta" },
    { value: "3", label: "stacks principais" },
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <section className="grid min-h-[calc(100vh-84px)] grid-cols-1 items-center gap-12 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
            <div className="order-2 max-w-4xl lg:order-none">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-accent">
                  Front-end + Mobile
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70">
                  React, Next, Vue, Nuxt, Angular, Flutter
                </span>
              </div>

              <h1 className="font-display text-6xl font-extrabold leading-[0.88] tracking-normal text-white md:text-8xl xl:text-[118px]">
                Luis Felipe
                <span className="block text-accent">Guilhão</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                Desenvolvedor que cria interfaces web e mobile com performance, direção visual forte e arquitetura limpa para produtos digitais que precisam parecer atuais e funcionar bem.
              </p>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                <DownloadButton />
                <ContactButton />
              </div>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div>
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-12 h-12 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full flex justify-center items-center text-white text-xl hover:border-accent/50 hover:text-accent hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                  <ArrowUpRight size={16} className="text-accent" />
                  Disponível para remoto
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-none">
              <div className="relative z-10">
                <ProfilePic />
              </div>
            </div>
        </section>

        <section className="grid gap-4 py-8 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="texture-panel rounded-lg p-5">
              <div className="font-display text-4xl font-extrabold text-accent">{item.value}</div>
              <p className="mt-2 text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-accent">Stack atual</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none md:text-6xl">
              Web, mobile e produto no mesmo fluxo.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Layers3, title: "Web moderna", text: "React, Next.js, Vue.js, Nuxt, Angular, TypeScript e Tailwind." },
              { icon: Smartphone, title: "Mobile", text: "React Native, Expo e Flutter para apps multiplataforma." },
              { icon: Cpu, title: "Produto", text: "UI/UX, integrações, performance, testes e automações." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
                <item.icon className="mb-6 text-accent" size={30} />
                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ServicesSection />
      </div>

      <CarrouselSkills />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-[#050505] p-8 text-white md:p-14">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(135deg,rgba(29,185,84,0.34),rgba(29,185,84,0.04))]" />
          <div className="relative max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">próximo produto</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-none md:text-6xl">Vamos construir uma interface que pareça inevitável?</h2>
            <p className="mt-5 max-w-xl text-white/60">Trabalho com implementação front-end, aplicativos mobile e acabamento de experiência para produtos digitais.</p>
          </div>
          <div className="relative mt-8">
          <ContactButton />
          </div>
        </div>
      </div>
    </main>
  );
}
