
import { services } from "@/data/services-data";

function PipeDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-2 bottom-0 hidden translate-x-1/4 translate-y-1/4 select-none lg:block"
    >
      <div className="relative h-24 w-20 rounded-t-[1.4rem] border-[5px] border-mario-brickDark bg-mario-pipe shadow-[inset_8px_0_0_rgba(255,255,255,0.12),0_18px_32px_rgba(32,17,11,0.18)]">
        <div className="absolute -top-4 left-1/2 h-6 w-28 -translate-x-1/2 rounded-xl border-[5px] border-mario-brickDark bg-mario-green shadow-[inset_0_-4px_0_rgba(0,0,0,0.16)]" />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative py-16">
      <PipeDecoration />
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-mario-coin">power-ups</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-none md:text-6xl">
            Do protótipo ao deploy, com acabamento de produto.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-white/60 lg:ml-auto">
          {services[0].description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {services[0].serviceList.map((service, index) => (
          <div 
            key={index}
            className="mario-panel pixel-corners group flex min-h-[260px] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mario-red"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid size-14 place-items-center rounded-2xl border-4 border-mario-brickDark bg-mario-question text-mario-brickDark shadow-[inset_0_-4px_0_rgba(0,0,0,0.22)] transition-colors group-hover:bg-mario-red group-hover:text-white">
                <service.icon className="text-3xl" />
              </div>
              <span className="font-mono text-xs text-white/35">0{index + 1}</span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold leading-tight">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
