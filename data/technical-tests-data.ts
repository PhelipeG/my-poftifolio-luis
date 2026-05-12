export interface TechnicalTest {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Frontend" | "Mobile";
  position: string;
  repositoryUrl?: string;
  backendRepositoryUrl?: string;
  liveUrl?: string;
  technologies: string[];
  status: "Concluído" | "Em andamento" | "Finalizado";
  imageFit?: "cover" | "contain";
}

export const technicalTestsData: TechnicalTest[] = [
  {
    id: 1,
    title: "App de E-commerce com Flutter",
    description: "Aplicativo Flutter para e-commerce, consumindo produtos de dois fornecedores via API, com busca, filtros avançados,carrinho persistente e finalização de compra com banco de dados de uma api",
    image: "/images-projects/flutterEcommerce.png",
    category: "Mobile",
    position: "Desenvolvedor Fullstack Junior",
    repositoryUrl: "https://github.com/PhelipeG/teste-tecnico-fullstack",
    backendRepositoryUrl: "https://github.com/PhelipeG/teste-tecnico-fullstack/tree/master/backend",
    technologies: ["Flutter", "Http", "TypeScript", "Material Design","Shared Preferences"],
    status: "Concluído"
  },
  {
    id: 2,
    title: "App Web de Ecommerce com ReactJs",
    description: "Aplicação web de e-commerce desenvolvida com React.js, utilizando Context API para gerenciamento de estado , React Router para navegação, e integração com uma API RESTful para gerenciamento de produtos e carrinho de compras.",
    image: "/images-projects/webEcommerce.png",
    category: "Frontend",
    position: "Desenvolvedor Fullstack Junior",
    repositoryUrl: "https://github.com/PhelipeG/teste-tecnico-fullstack",
    backendRepositoryUrl: "https://github.com/PhelipeG/teste-tecnico-fullstack/tree/master/backend",
    technologies: ["React.js", "React Router v7", "Context API", "Axios", "TypeScript", "React Hook Form", "Zod", "Vitest" , "Tailwind CSS" , "React Query"],
    status: "Concluído"
  },
  {
    id: 7,
    title: "CDC Bank - App Bancário Mobile",
    description: "Aplicativo mobile de gerenciamento bancário desenvolvido como teste técnico para o Banco CDC. Permite que parceiros gerenciem clientes e realizem transações de forma segura: autenticação com persistência de sessão, listagem e busca em tempo real de clientes por nome ou documento, cadastro PF/PJ, edição e exclusão, transferências entre contas com validação de saldo, histórico de transações e geração de comprovante PDF. Navegação com Stack + Bottom Tabs, loading states, empty states e tema customizável — entrega completa de produto mobile production-ready.",
    image: "/images-projects/cdc-mobile.png",
    category: "Mobile",
    position: "Desenvolvedor Mobile",
    repositoryUrl: "https://github.com/PhelipeG/Cdc-Bank-ReactNative",
    technologies: ["React Native", "TypeScript", "Expo", "AsyncStorage", "React Navigation", "React Hook Form", "Zod", "Axios"],
    status: "Concluído",
    imageFit: "contain"
  },
  {
    id: 6,
    title: "Lead Management System - Logik",
    description: "Solução completa para captação e gestão de leads empresariais, desenvolvida como teste técnico para vaga de Desenvolvedor Full Stack. Interface moderna com fluxo completo de criação, edição e acompanhamento de leads, validação robusta com Zod e integração com API RESTful via Axios. Demonstra domínio de Next.js App Router, tipagem estrita e boas práticas de arquitetura frontend prontas para produção.",
    image: "/images-projects/logik-gestao-leads.png",
    category: "Frontend",
    position: "Desenvolvedor Full Stack",
    repositoryUrl: "https://github.com/PhelipeG/logik-manager-lead-web",
    backendRepositoryUrl: "https://github.com/PhelipeG/logik-manager-lead-backend",
    liveUrl: "https://logik-manager-lead-web.vercel.app",
    technologies: ["Next.js", "React", "TypeScript", "Axios", "Zod"],
    status: "Concluído"
  },
  {
    id: 5,
    title: "Gestão de Vagas e Candidatos - Peixe 30",
    description: "Sistema completo de gerenciamento de vagas e candidatos desenvolvido como teste técnico para a Peixe 30. Plataforma com matching inteligente entre vagas e candidatos, interface intuitiva para recrutadores e candidatos, visualização de compatibilidade e fluxo completo de candidatura. Arquitetura limpa com Next.js App Router, tipagem estrita com TypeScript e componentes acessíveis via Shadcn UI — demonstrando capacidade de entregar produto pronto para produção.",
    image: "/images-projects/gestao-vagas.png",
    category: "Frontend",
    position: "Desenvolvedor Front-end Pleno",
    repositoryUrl: "https://github.com/PhelipeG/frontend-peixe30-sistemas-vagas",
    backendRepositoryUrl: "https://github.com/PhelipeG/backend-peixe30-gestao-vagas",
    liveUrl: "https://peixe30-sistemas-vagas.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Axios" , "Zod", "React Hook Form"],
    status: "Concluído"
  },
  {
    id: 4,
    title: "Smarti Web Ecommerce",
    description: "E-commerce completo desenvolvido como teste técnico para vaga de Front-end Pleno no Grupo Smarti - Tecnologia Inteligente. Arquitetura moderna com Nuxt v4 e Vue.js, gerenciamento de estado com Pinia, cache e sincronização de dados assíncronos com TanStack Query v5, estilização performática com Tailwind CSS v4 e tipagem estrita com TypeScript. Demonstra domínio do ecossistema Vue no nível sênior: composables reutilizáveis, SSR-ready com Nuxt, e padrões de código escaláveis.",
    image: "/images-projects/smarti-ecommerce.png",
    category: "Frontend",
    position: "Desenvolvedor Front-end Pleno",
    repositoryUrl: "https://github.com/PhelipeG/smarti-web-ecommerce",
    liveUrl: "https://smarti-web-ecommerce.vercel.app",
    technologies: ["Nuxt v4", "Vue.js", "Vite", "TypeScript", "Pinia", "Tailwind CSS v4", "TanStack Query v5", "Local Storage"],
    status: "Concluído"
  },
  {
    id: 3,
    title: "App Fitness",
    description: "Aplicativo mobile para acompanhamento de atividades físicas, com funcionalidades de registro de treinos, monitoramento de progresso , integracao com chatbot(IA Gemini com prompt personalizado para sugestões de treinos e dicas de saúde).",
    image: "/images-projects/fitnessApp.png",
    category: "Mobile",
    position: "Desenvolvedor Mobile Fullstack",
    repositoryUrl: "https://github.com/PhelipeG/teste-fullstack-mobile",
    backendRepositoryUrl: "https://github.com/PhelipeG/teste-fullstack-mobile/tree/master/backend",
    technologies: ["React Native", "Expo", "TypeScript", "Axios", "Zustand", "Expo Router", "Expo Secure Store", "Gemini AI" , "Nativewind", "React Query"],
    status: "Concluído"
  },
];

export const categoryOptions = [
  { value: "all", label: "Todos" },
  { value: "Frontend", label: "Frontend" },
  { value: "Mobile", label: "Mobile" }
];
