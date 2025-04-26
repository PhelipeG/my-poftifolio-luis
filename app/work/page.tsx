"use client";

import { motion } from "framer-motion";
import { projectsData } from "../../data/projects-data";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsGithub,  BsCodeSlash } from "react-icons/bs";
import { MdDevices, MdOutlineCategory } from "react-icons/md";
import { useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function Work() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  
  // Variantes de animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  // Animação para os ícones flutuantes de tecnologia
  const floatingIconVariants = {
    initial: { y: 0, opacity: 0.7 },
    animate: (i: number) => ({
      y: [-5, 5, -5],
      opacity: [0.7, 1, 0.7],
      transition: {
        y: {
          repeat: Infinity,
          duration: 3 + i * 0.5,
          ease: "easeInOut",
        },
        opacity: {
          repeat: Infinity,
          duration: 3 + i * 0.5,
          ease: "easeInOut",
        },
      },
    }),
  };

  // Filtros de projetos
  const categories = ["Todos", "Web", "Mobile"];
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = activeFilter === "Todos" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Ícones flutuantes decorativos */}
      <motion.div
        variants={floatingIconVariants}
        custom={0}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-[10%] hidden lg:block z-0 opacity-20"
      >
        <BsCodeSlash className="text-5xl text-green-400" />
      </motion.div>
      
      <motion.div
        variants={floatingIconVariants}
        custom={1}
        initial="initial"
        animate="animate"
        className="absolute bottom-40 right-[15%] hidden lg:block z-0 opacity-20"
      >
        <MdDevices className="text-6xl text-purple-400" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 py-1.5 bg-green-400/10 text-green-400 text-sm font-medium rounded-full inline-block mb-6"
          >
            Portfólio de Projetos
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-5 drop-shadow-[0_5px_20px_rgba(74,222,128,0.15)]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-white/80">
              Meus Projetos
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed"
          >
            Explore meus projetos de desenvolvimento web e mobile. 
            Cada projeto representa meu compromisso com código limpo, interfaces modernas e funcionalidades inovadoras.
          </motion.p>
          
          {/* Filtros de Categoria */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md
                  ${activeFilter === category 
                    ? "bg-gradient-to-r from-green-500 to-green-400 text-black shadow-[0_4px_15px_rgba(74,222,128,0.3)]" 
                    : "bg-white/5 backdrop-blur-sm text-white/80 hover:bg-white/10 border border-white/10"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 } 
              }}
              onHoverStart={() => setHoverIndex(index)}
              onHoverEnd={() => setHoverIndex(null)}
              className="max-w-[380px] w-full rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:border-green-400/30 transition-all duration-300"
            >
              <div className="relative w-full h-[220px] overflow-hidden group">
                {/* Overlay de categoria */}
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/90 font-medium border border-white/20 shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <MdOutlineCategory className="text-green-400" />
                    {project.category}
                  </div>
                </div>
                
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3} // Prioriza o carregamento das 3 primeiras imagens
                  loading={index < 3 ? "eager" : "lazy"}
                  quality={75} // Boa qualidade mas otimizada para performance
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ7W5RN0wAAAABJRU5ErkJggg=="
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay escuro com botão */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <Link href={project.link} target="_blank" className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-500 to-green-400 text-black font-medium px-5 py-2.5 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(74,222,128,0.3)]"
                    >
                      Ver projeto <FiExternalLink />
                    </motion.div>
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h2>
                
                <p className="text-white/70 text-sm mb-5 line-clamp-3 h-[60px] leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack &&
                    project.stack.map((item, idx) => {
                      // Limita a 5 tecnologias visíveis por padrão
                      if (idx < 5 || hoverIndex === index) {
                        return (
                          <motion.span
                            key={idx}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 * idx, duration: 0.3 }}
                            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-green-400 font-medium backdrop-blur-sm shadow-sm"
                          >
                            {item.name}
                          </motion.span>
                        );
                      }
                      return null;
                    })}
                  
                  {/* Contador para tecnologias extras não exibidas */}
                  {project.stack && project.stack.length > 5 && hoverIndex !== index && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-xs px-3 py-1 rounded-full bg-green-400/20 text-green-400 font-medium"
                    >
                      +{project.stack.length - 5}
                    </motion.span>
                  )}
                </div>
                
                {/* Footer do card */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  {/* Botão do GitHub */}
                  <Link href={project.link} target="_blank" aria-label={`Ver repositório de ${project.title}`}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[45px] h-[45px] rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex justify-center items-center group transition-all duration-300 hover:bg-green-400/20 hover:border-green-400/30 shadow-md">
                          <BsGithub className="text-white text-lg group-hover:text-green-400 transition-colors duration-300" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
                          <p>Repositório no Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  
                  {/* Indicador de tipo/ano */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-inner"
                  >
                    <span className="text-xs text-white/70 font-medium">
                      {project.category === "Web" ? "Web App" : "Mobile App"}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Seção CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-400/10 to-purple-500/10 backdrop-blur-md rounded-3xl py-12 px-8 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Tem um projeto em mente?</h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Estou disponível para novos projetos. Vamos trabalhar juntos para transformar sua ideia em realidade!
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(74, 222, 128, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-400 text-black font-medium rounded-full shadow-[0_8px_20px_rgba(74,222,128,0.3)] transition-all duration-300"
              >
                Entre em contato
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
