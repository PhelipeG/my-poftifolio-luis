const healtcareImage = "/images-projects/healtcare.png";
const plannerIoImage = "/images-projects/planner-io.png";
const gdeliveryImage = "/images-projects/gdelivery.png";
const mycontactsImage = "/images-projects/mycontacts.png";
const webcarrosImage = "/images-projects/webcarros.png";
const passInImage = "/images-projects/pass-in.png";
const mygoalsImage = "/images-projects/mygoals.png";
const iweatherImage = "/images-projects/iweather.png";
const pizzaShopImage = "/images-projects/pizzashop-web.png";

export const projectsData = [
  {
    id: 1,
    title: "HealtCare",
    description:
      "Uma plataforma de saúde que agiliza o registro de pacientes, agendamento de consultas e registros médicos com implementacao de formulários complexos e notificações por SMS",
    image: healtcareImage,
    link: "https://github.com/PhelipeG/Plataforma-HealtCare",
    category: "Web",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Shadcn Ui" },
      { name: "Appwrite" },
      { name: "Twilio" },
      { name: "React Hook Form" },
      { name: "Sentry" },
    ],
  },
  {
    id: 2,
    title: "Planner Io",
    description:
      "Desenvolvida com React e estilizada com Tailwind CSS, esta aplicação permite aos usuários cadastrar viagens, planejar todos os detalhes e convidar amigos para participar. Com uma interface moderna e responsiva, os usuários podem gerenciar itinerários, reservas e listas de tarefas, tornando o planejamento de viagens uma experiência colaborativa e divertida.",
    image: plannerIoImage,
    link: "https://github.com/GuilhaoF/planner.io",
    category: "Web",
    stack: [
      { name: "Vite" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Shadcn Ui" },
      { name: "Axios" },
    ],
  },
  {
    id: 3,
    title: "Gdelivery",
    description:
      "Aplicacao react native de delivery com gestao de estado e envio dos pedidos ao whatsapp da loja Para simplificar, estamos criando um aplicativo de cardápio que proporciona aos clientes a conveniência de selecionar os pratos desejados. Ao finalizar o pedido no aplicativo, a solicitação é automaticamente encaminhada para o WhatsApp do restaurante.",
    image: gdeliveryImage,
    link: "",
    category: "Mobile",
    stack: [
      { name: "Expo" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Nativewind" },
      { name: "Zustand" },
      { name: "Async Storage" },
      { name: "Expo Router" },
    ],
  },
  {
    id: 4,
    title: "MyContacts",
    description: "Gereciador de contatos",
    image: mycontactsImage,
    link: "https://github.com/PhelipeG/mycontacts-frontend",
    category: "Web",
    stack: [
      { name: "React" },
      { name: "Javascript" },
      { name: "Styled-Components" },
      { name: "Vite" },
    ],
  },
  {
    id: 5,
    title: "Web Carros",
    description: "Sistema de gerenciamento de carros",
    image: webcarrosImage,
    link: "https://github.com/PhelipeG/web-rtx-cars",
    category: "Web",
    stack: [
      { name: "Firebases" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Swiper" },
      { name: "Zod" },
      { name: "React Hook Form" },
    ],
  },
  {
    id: 6,
    title: "Pass In",
    description: "Aplicaçao Mobile para gerenciamento de inscrições em eventos",
    image: passInImage,
    link: "https://github.com/GuilhaoF/pass-in-app",
    category: "Mobile",
    stack: [
      { name: "Expo" },
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Nativewind" },
      { name: "Zustand" },
      { name: "Moti" },
      { name: "Expo Router" },
      { name: " Expo Linking" },
    ],
  },
  {
    id: 7,
    title: "My Goals",
    description: "Aplicaçao Mobile para gerenciamento de metas financeiras",
    image: mygoalsImage,
    link: "",
    category: "Mobile",
    stack: [
      { name: "Expo" },
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Nativewind" },
      { name: "Reanimated 3" },
      { name: "Sqlite3" },
      { name: "Expo Linking" },
      { name: "Expo Router" },
    ],
  },
  {
    id: 8,
    title: "Iweather",
    description:
      "Aplicaçao Mobile de previsao do tempo usando api do openweather",
    image: iweatherImage,
    link: "",
    category: "Mobile",
    stack: [
      { name: "Expo" },
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Nativewind" },
      { name: "Zustand" },
      { name: "Axios" },
      { name: "Expo Router" },
      { name: "Expo Updates" },
      { name: "Jest" },
    ],
  },
  {
    id: 9,
    title: "Pizza Shop",
    description: "",
    image: pizzaShopImage,
    link: "https://github.com/PhelipeG/Pizza-Shop-Web?tab=readme-ov-file",
    category: "Web",
    stack: [
      { name: "Vite" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "React Query" },
      { name: "Axios" },
      { name: "Shadcn Ui" },
      { name: "Playwright" },
      { name: "Jest" },
      { name: "React Hook Form" },
      { name: "Zod" },
    ],
  },
];
