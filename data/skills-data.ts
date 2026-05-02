import { IconType } from "react-icons";
import { FaAngular, FaCss3, FaDocker, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiExpo, SiFlutter, SiNextdotjs, SiNuxtdotjs, SiPostgresql, SiStyledcomponents, SiTailwindcss, SiVuedotjs } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

interface SkillsItem {
  icon: IconType;
  name: string;
}

interface SkillsData {
  title: string;
  description: string;
  skillList: SkillsItem[];
}

//skills data
export const skills : SkillsData[] = [{
  title: "Habilidades",
  description:
    "Estas são algumas das habilidades que eu possuo, e que venho aprimorando ao longo do tempo.",
  skillList: [
    {
      icon: TbBrandTypescript,
      name: "Typescript",
    },
    {
      icon: FaHtml5,
      name: "HTML5",
    },
    {
      icon: FaCss3 ,
      name: "CSS3",
    },
    {
      icon: FaJs ,
      name: "Javascript",
    },
    {
      icon: FaReact,
      name: "React",
    },
    {
      icon: SiTailwindcss ,
      name: "tailwind",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
    },
    {
      icon: SiVuedotjs,
      name: "Vue.js",
    },
    {
      icon: SiNuxtdotjs,
      name: "Nuxt",
    },
    {
      icon: FaAngular,
      name: "Angular",
    },
    {
      icon: FaDocker,
      name: "Docker",
    },
    {
      icon: SiPostgresql ,
      name: "PostgreSQL",
    },
    {
      icon: FaFigma ,
      name: "Figma",
    },
    {
      icon: FaReact,
      name: "React Native",
    },
    {
      icon: SiExpo,
      name: "Expo",
    },
    {
      icon: SiFlutter,
      name: "Flutter",
    },
    {
      icon: SiStyledcomponents,
      name: "Styled Components",
    }
  ],
}];
