'use client'

import { lazy } from "react";
import { skills } from "../data/skills-data";

// Otimização do componente para melhor performance
export default function CarrouselSkills() {
  return (
    <div className="container mx-auto py-10">
      {skills.map((skill, index) => (
        <div key={index} className="p-4">
          <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none">
            {skill.skillList.map((skill, index) => (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start hover:text-slate-500"
              >
                <skill.icon className="text-5xl" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}