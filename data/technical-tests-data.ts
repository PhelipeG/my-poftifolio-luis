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
