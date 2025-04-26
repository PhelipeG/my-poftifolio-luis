import { IconType } from "react-icons";
import { RiCodeBoxLine, RiLayoutGridLine, RiMobileDownloadLine } from "react-icons/ri";
import { AiOutlineRocket } from "react-icons/ai";

interface ServiceItem {
  icon: IconType;
  title: string;
  description: string;
}

interface ServiceData {
  title: string;
  description: string;
  serviceList: ServiceItem[];
}

// services data
export const services: ServiceData[] = [{
  title: "Serviços",
  description: "Oferecendo soluções de desenvolvimento completas para seus projetos digitais.",
  serviceList: [
    {
      icon: RiCodeBoxLine,
      title: "Desenvolvimento Frontend",
      description: "Criação de interfaces modernas e responsivas com React, Next.js e TypeScript."
    },
    {
      icon: RiMobileDownloadLine,
      title: "Desenvolvimento Mobile",
      description: "Aplicativos nativos e multiplataforma com React Native para iOS e Android."
    },
    {
      icon: RiLayoutGridLine,
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas e experiências de usuário de alta qualidade."
    },
    {
      icon: AiOutlineRocket,
      title: "SEO e Performance",
      description: "Otimização para mecanismos de busca e desempenho de aplicações web."
    }
  ],
}];