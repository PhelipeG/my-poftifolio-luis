export interface TechnicalTest {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Frontend" | "Backend" | "Mobile";
  position: string;
  company?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  technologies: string[];
  completedDate: string;
  status: "Concluído" | "Em andamento" | "Finalizado";
}

export const technicalTestsData: TechnicalTest[] = [
  {
    id: 1,
    title: "Sistema de E-commerce",
    description: "Desenvolvimento de uma plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e painel administrativo.",
    image: "/images-projects/webcarros.png",
    category: "Frontend",
    position: "Desenvolvedor Frontend Sênior",
    company: "TechCorp",
    repositoryUrl: "https://github.com/usuario/ecommerce-test",
    liveUrl: "https://ecommerce-test.vercel.app",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    completedDate: "2024-12-15",
    status: "Concluído"
  },
  {
    id: 2,
    title: "API de Gestão de Tarefas",
    description: "API RESTful para gerenciamento de tarefas com autenticação JWT, CRUD completo e documentação com Swagger.",
    image: "/images-projects/mygoals.png",
    category: "Backend",
    position: "Desenvolvedor Backend Pleno",
    company: "StartupXYZ",
    repositoryUrl: "https://github.com/usuario/tasks-api",
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "JWT", "Swagger"],
    completedDate: "2024-11-20",
    status: "Concluído"
  },
  {
    id: 3,
    title: "App de Delivery",
    description: "Aplicativo mobile para delivery de comida com geolocalização, pagamentos online e rastreamento em tempo real.",
    image: "/images-projects/gdelivery.png",
    category: "Mobile",
    position: "Desenvolvedor Mobile React Native",
    company: "FoodTech",
    repositoryUrl: "https://github.com/usuario/delivery-app",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Google Maps", "Stripe"],
    completedDate: "2024-10-30",
    status: "Concluído"
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Painel de controle com gráficos interativos, relatórios em tempo real e sistema de filtros avançados.",
    image: "/images-projects/healtcare.png",
    category: "Frontend",
    position: "Desenvolvedor Frontend Junior",
    company: "DataViz Inc",
    repositoryUrl: "https://github.com/usuario/analytics-dashboard",
    liveUrl: "https://analytics-dashboard.vercel.app",
    technologies: ["Vue.js", "Chart.js", "Vuetify", "Axios", "WebSocket"],
    completedDate: "2024-09-15",
    status: "Concluído"
  },
  {
    id: 5,
    title: "Microserviços de Usuários",
    description: "Arquitetura de microserviços para gestão de usuários com Docker, Redis e implementação de CQRS.",
    image: "/images-projects/mycontacts.png",
    category: "Backend",
    position: "Desenvolvedor Backend Sênior",
    company: "MicroTech",
    repositoryUrl: "https://github.com/usuario/user-microservices",
    technologies: ["Node.js", "NestJS", "Docker", "Redis", "MongoDB", "RabbitMQ"],
    completedDate: "2024-08-22",
    status: "Concluído"
  },
  {
    id: 6,
    title: "App de Fitness",
    description: "Aplicativo de fitness com tracking de exercícios, planos de treino personalizados e integração com wearables.",
    image: "/images-projects/iweather.png",
    category: "Mobile",
    position: "Desenvolvedor Mobile Flutter",
    company: "FitnessTech",
    repositoryUrl: "https://github.com/usuario/fitness-app",
    technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit"],
    completedDate: "2024-07-10",
    status: "Concluído"
  },
  {
    id: 7,
    title: "Plataforma de Streaming",
    description: "Interface web para plataforma de streaming com player customizado, sistema de favoritos e recomendações.",
    image: "/images-projects/pizzashop-web.png",
    category: "Frontend",
    position: "Desenvolvedor Frontend Pleno",
    company: "StreamCorp",
    repositoryUrl: "https://github.com/usuario/streaming-platform",
    liveUrl: "https://streaming-platform.vercel.app",
    technologies: ["Angular", "RxJS", "Material UI", "Video.js", "PWA"],
    completedDate: "2024-06-25",
    status: "Concluído"
  },
  {
    id: 8,
    title: "Sistema de Chat Real-time",
    description: "Sistema de chat em tempo real com salas, mensagens privadas e notificações push.",
    image: "/images-projects/pass-in.png",
    category: "Backend",
    position: "Desenvolvedor Fullstack Junior",
    company: "ChatApp",
    repositoryUrl: "https://github.com/usuario/realtime-chat",
    technologies: ["Socket.io", "Node.js", "React", "MongoDB", "JWT"],
    completedDate: "2024-05-18",
    status: "Concluído"
  }
];

export const categoryOptions = [
  { value: "all", label: "Todos" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
  { value: "Mobile", label: "Mobile" }
];
