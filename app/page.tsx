"use client";
import CarrouselSkills from "@/components/carrousel-skills";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { ProfilePic } from "../components/profile-pic";
import { Social } from "../components/social-links";
import { motion } from "framer-motion";
import { RiCodeBoxLine,  RiLayoutGridLine , RiMobileDownloadLine} from "react-icons/ri";
import { AiOutlineRocket } from "react-icons/ai";

export default function Home() {
  // Animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Serviços
  const services = [
    {
      icon: <RiCodeBoxLine className="text-3xl text-green-400" />,
      title: "Desenvolvimento Frontend",
      description: "Criação de interfaces modernas e responsivas com React, Next.js e TypeScript."
    },
    {
      icon: <RiMobileDownloadLine className="text-3xl text-green-400" />,
      title: "Desenvolvimento Mobile",
      description: "Aplicativos nativos e multiplataforma com React Native para iOS e Android."
    },
    {
      icon: <RiLayoutGridLine className="text-3xl text-green-400" />,
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas e experiências de usuário de alta qualidade."
    },
    {
      icon: <AiOutlineRocket className="text-3xl text-green-400" />,
      title: "SEO e Performance",
      description: "Otimização para mecanismos de busca e desempenho de aplicações web."
    }
  ];

  function handleDownloadCv() {
    const link = document.createElement("a");
    link.href = "/pdf/LuisCV.pdf";
    link.download = "Luis_Felipe_Guilhao_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="h-full min-h-screen py-12">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-20 xl:pt-8 xl:pb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center xl:text-left order-2 xl:order-none max-w-2xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block py-1 px-4 rounded-full border border-green-400/30 bg-green-400/10 text-green-400 font-medium text-sm mb-6"
            >
              Desenvolvedor Front-end e Mobile
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_5px_15px_rgba(74,222,128,0.15)]"
            >
              Olá, me chamo {" "}
              <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Luis Felipe Guilhao
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-white/70 mb-8 text-lg leading-relaxed"
            >
              Desenvolvendo soluções digitais de alta qualidade com foco em experiência do usuário, 
              desempenho e código limpo para criar produtos que causam impacto.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col xl:flex-row items-center gap-5"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCv}
                className="bg-white/5 backdrop-blur-sm border border-green-400/30 hover:bg-green-400/20 hover:border-green-400/50 rounded-xl px-8 py-6 uppercase flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <span>Baixar Currículo</span>
                <FiDownload className="text-xl" />
              </Button>

              <motion.div 
                variants={itemVariants}
                className="mb-8 xl:mb-0"
              >
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full flex justify-center items-center text-white text-xl hover:border-green-400/50 hover:text-green-400 hover:scale-110 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="order-1 xl:order-none relative"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <ProfilePic />
            </motion.div>
            
            {/* Efeito de brilho atrás da imagem */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </motion.div>
        
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 mb-12"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent inline-block mb-4">Serviços Oferecidos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto rounded-full"></div>
            <p className="text-white/60 mt-6 max-w-2xl mx-auto">Soluções digitais completas para transformar sua visão em realidade com tecnologias modernas e práticas de desenvolvimento eficientes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.8 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-green-400/30 transition-all duration-300 h-full flex flex-col"
              >
                <div className="bg-white/5 rounded-xl w-16 h-16 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm flex-grow">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="my-20 py-14 px-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">2+</div>
              <div className="text-white/70">Anos de experiência</div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-white/70">Projetos completos</div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-white/70">Clientes satisfeitos</div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-white/70">Taxa de satisfação</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Skills Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <CarrouselSkills />
      </motion.div>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="container mx-auto mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-green-400/20 to-purple-500/20 backdrop-blur-md rounded-3xl py-16 px-8 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">Estou disponível para projetos freelance, colaborações e oportunidades de trabalho remoto.</p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-green-400 hover:bg-green-500 text-black font-medium rounded-xl px-8 py-6 shadow-[0_8px_30px_rgba(74,222,128,0.3)] transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Entre em contato
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
