import { skills } from "../data/skills-data";

export default function CarrouselSkills() {
  return (
    <section className="border-y-4 border-mario-brickDark bg-[#edf3fb] py-14 text-[#111318] dark:border-[#671010] dark:bg-[#0d0303] dark:text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-mario-coin">choose your power-up</span>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-6xl">Stack de trabalho</h2>
          </div>
          <p className="max-w-xl text-[#4f5b70] dark:text-white/75">
            Ferramentas que uso para construir interfaces web, apps mobile, integrações e experiências de produto.
          </p>
        </div>
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-8">
            {skill.skillList.map((skill, index) => (
              <div
                key={index}
                className="mario-panel pixel-corners group flex min-h-[116px] flex-col justify-between p-4 transition-all hover:-translate-y-1 hover:border-mario-red"
              >
                <skill.icon className="text-4xl text-mario-coin transition-transform group-hover:scale-110 group-hover:text-mario-yellow" />
                <h3 className="font-display text-lg font-bold leading-tight">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
