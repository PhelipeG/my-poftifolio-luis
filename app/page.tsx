import { ProfilePic } from "../components/profile-pic";
import { Social } from "../components/social-links";
import CarrouselSkills from "@/components/carrousel-skills";
import ServicesSection from "@/components/services-section";
import DownloadButton from "@/components/ui/download-button";
import ContactButton from "@/components/ui/contact-button";
import { Cpu, Gamepad2, Layers3, Smartphone } from "lucide-react";

export default function Home() {
  const highlights = [
    { value: "20+", label: "fases entregues" },
    { value: "35%", label: "power-up em automações" },
    { value: "40%", label: "menos loading em apps" },
    { value: "4", label: "mundos de stack" },
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <section className="grid min-h-[calc(100vh-84px)] grid-cols-1 items-center gap-12 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
            <div className="order-2 max-w-4xl lg:order-none">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="pixel-corners border-4 border-mario-brickDark bg-mario-question px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-mario-brickDark">
                  World 1-1 ready
                </span>
                <span className="rounded-2xl border-4 border-mario-brickDark bg-mario-brick px-4 py-2 text-sm text-white">
                  React, Next, Vue, Nuxt, Angular, Flutter
                </span>
              </div>

              <h1 className="font-display text-6xl font-extrabold leading-[0.88] tracking-normal text-white drop-shadow-[5px_5px_0_#7c3418] md:text-8xl xl:text-[118px]">
                Luis Felipe
                <span className="block text-mario-coin">Guilhão</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/86 drop-shadow-[1px_1px_0_#2b1b14] md:text-xl">
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
                    iconStyles="w-12 h-12 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full flex justify-center items-center text-white text-xl hover:border-accent/50 hover:text-accent hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                  <Gamepad2 size={16} className="text-mario-coin" />
                  remoto / freelance / produto
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
                <p className="mt-3 text-sm leading-6 text-white/58">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ServicesSection />
      </div>

      <CarrouselSkills />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-20">
        <div className="mario-panel pixel-corners relative overflow-hidden p-8 text-white md:p-14">
          <div className="absolute right-8 top-8 grid grid-cols-2 gap-3 opacity-70">
            <span className="size-6 rounded-full bg-mario-red" />
            <span className="size-6 rounded-full bg-mario-yellow" />
            <span className="size-6 rounded-full bg-mario-blue" />
            <span className="size-6 rounded-full bg-mario-green" />
          </div>
          <div className="relative max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mario-coin">next level?</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-none md:text-6xl">Pronto para iniciar a próxima fase?</h2>
            <p className="mt-5 max-w-xl text-white/60">Front-end, mobile e UX com acabamento visual memorável e performance de produção.</p>
          </div>
          <div className="relative mt-8">
          <ContactButton />
          </div>
        </div>
      </div>
    </main>
  );
}
