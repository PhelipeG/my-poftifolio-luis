import { ProfilePic } from "../components/profile-pic";
import { Social } from "../components/social-links";
import CarrouselSkills from "@/components/carrousel-skills";
import ServicesSection from "@/components/services-section";
import DownloadButton from "@/components/ui/download-button";
import ContactButton from "@/components/ui/contact-button";
import MarioThemeAudio from "@/components/mario-theme-audio";
import ThemeCharacter from "@/components/theme-character";
import { Cpu, Gamepad2, Layers3, Smartphone } from "lucide-react";

function PipeDecoration({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`hidden select-none pointer-events-none lg:block ${className}`}
    >
      <div className="relative h-28 w-24 rounded-t-[1.5rem] border-[5px] border-mario-brickDark bg-mario-pipe shadow-[inset_8px_0_0_rgba(255,255,255,0.12),0_18px_32px_rgba(32,17,11,0.18)]">
        <div className="absolute -top-4 left-1/2 h-6 w-32 -translate-x-1/2 rounded-xl border-[5px] border-mario-brickDark bg-mario-green shadow-[inset_0_-4px_0_rgba(0,0,0,0.16)]" />
      </div>
    </div>
  );
}

export default function Home() {
  const highlights = [
    { value: "20+", label: "fases entregues" },
    { value: "35%", label: "power-up em automações" },
    { value: "40%", label: "menos loading em apps" },
    { value: "4", label: "mundos de stack" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-[#111318] dark:text-white">
      <MarioThemeAudio />
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <section className="grid min-h-[calc(100vh-84px)] grid-cols-1 items-center gap-12 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
            <div className="order-2 max-w-4xl lg:order-none">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="pixel-corners border-4 border-mario-brickDark bg-mario-question px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-mario-brickDark">
                  World 1-1 ready
                </span>
                <span className="rounded-2xl border-4 border-mario-brickDark bg-white px-4 py-2 text-sm font-semibold text-[#111318] shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)] dark:border-[#671010] dark:bg-[#210606] dark:text-white">
                  React, Next, Vue, Nuxt, Angular, Flutter
                </span>
              </div>

              <h1 className="font-display text-5xl font-extrabold leading-[0.9] tracking-normal text-[#111318] md:text-7xl xl:text-[108px] dark:text-white">
                Luis Felipe
                <span className="block" aria-label="Guilhão">
                  <span aria-hidden="true" className="text-mario-blue">G</span>
                  <span aria-hidden="true" className="text-mario-red">u</span>
                  <span aria-hidden="true" className="text-mario-green">i</span>
                  <span aria-hidden="true" className="text-mario-yellow">l</span>
                  <span aria-hidden="true" className="text-mario-blue">h</span>
                  <span aria-hidden="true" className="text-mario-red">ã</span>
                  <span aria-hidden="true" className="text-mario-green">o</span>
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#3a465b] md:text-lg dark:text-white/85">
                Desenvolvedor front-end e mobile criando interfaces rápidas, bonitas e jogáveis na experiência: web, apps, produto e performance em modo Super Mario.
              </p>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                <DownloadButton />
                <ContactButton />
              </div>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div>
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-12 h-12 border border-[#d7deea] bg-white/90 backdrop-blur-sm rounded-full flex justify-center items-center text-[#111318] text-xl hover:border-mario-red hover:text-mario-red hover:-translate-y-1 shadow-[0_8px_24px_rgba(41,54,78,0.12)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mario-red focus-visible:ring-offset-2 dark:border-mario-red dark:bg-[#1b0505] dark:text-white dark:shadow-[0_8px_24px_rgba(229,37,33,0.22)] dark:hover:border-mario-coin dark:hover:bg-mario-red dark:hover:text-white dark:focus-visible:ring-offset-black"
                  />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#5a667c] dark:text-white/55">
                  <Gamepad2 size={16} className="text-mario-coin" />
                  remoto / freelance / produto
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-none">
              <div className="relative z-10">
                <ProfilePic />
              </div>
              <ThemeCharacter />
            </div>
        </section>

        <section className="grid gap-4 py-8 pb-16 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="texture-panel pixel-corners p-5">
              <div className="font-display text-4xl font-extrabold text-mario-brickDark">{item.value}</div>
              <p className="mt-2 text-sm font-semibold text-mario-brickDark/75">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-mario-coin drop-shadow-[1px_1px_0_#7c3418]">stack power-ups</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none md:text-6xl">
              Quatro controles, uma experiência.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Layers3, title: "Web moderna", text: "React, Next.js, Vue.js, Nuxt, Angular, TypeScript e Tailwind." },
              { icon: Smartphone, title: "Mobile", text: "React Native, Expo e Flutter para apps multiplataforma." },
              { icon: Cpu, title: "Produto", text: "UI/UX, integrações, performance, testes e automações." },
            ].map((item) => (
              <div key={item.title} className="mario-panel pixel-corners p-6">
                <item.icon className="mb-6 text-mario-coin" size={30} />
                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4b566b] dark:text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ServicesSection />
      </div>

      <CarrouselSkills />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-20">
        <div className="mario-panel pixel-corners relative overflow-hidden p-8 md:p-14">
          <div className="absolute right-8 top-8 grid grid-cols-2 gap-3 opacity-70">
            <span className="size-6 rounded-full bg-mario-red" />
            <span className="size-6 rounded-full bg-mario-yellow" />
            <span className="size-6 rounded-full bg-mario-blue" />
            <span className="size-6 rounded-full bg-mario-green" />
          </div>
          <div className="relative max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mario-coin">next level?</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-none text-[#111318] md:text-6xl dark:text-white">Pronto para iniciar a próxima fase?</h2>
            <p className="mt-5 max-w-xl text-[#4f5b70] dark:text-white/75">Front-end, mobile e UX com acabamento visual memorável e performance de produção.</p>
          </div>
          <div className="relative mt-8">
          <ContactButton />
          </div>
        </div>
      </div>
    </main>
  );
}
