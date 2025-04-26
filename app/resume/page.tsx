"use client";

import TimelineExperiences from "@/components/timeline-experiences";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { about } from "@/data/about-data";
import { education } from "@/data/education-data";
import { motion } from "framer-motion";
import { useRef } from "react";
import { HiDownload } from "react-icons/hi";
import { FaCode, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { BiCodeAlt, BiLaptop, BiMobile } from "react-icons/bi";

// Variantes de animação para elementos comuns
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Variantes para os ícones flutuantes
const floatingIcons = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

export default function Resume() {
  const containerRef = useRef(null);

  // Animação para a borda do card
  const borderVariants = {
    animate: {
      background: ["linear-gradient(90deg, rgba(74,222,128,0) 0%, rgba(74,222,128,1) 50%, rgba(74,222,128,0) 100%)"],
      backgroundSize: "200% 100%",
      backgroundPosition: ["100% 0%", "0% 0%", "100% 0%"],
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  // Função para baixar o currículo
  function handleDownloadCv() {
    const link = document.createElement("a");
    link.href = "/pdf/LuisCV.pdf";
    link.download = "Luis_Felipe_Guilhao_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6 relative"
    >
      {/* Elementos decorativos flutuantes */}
      <motion.div
        variants={floatingIcons}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-[10%] hidden md:block"
      >
        <BiCodeAlt className="text-5xl text-green-400/30" />
      </motion.div>
      
      <motion.div
        variants={floatingIcons}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute bottom-40 right-[15%] hidden md:block"
      >
        <BiLaptop className="text-4xl text-green-400/20" />
      </motion.div>
      
      <motion.div
        variants={floatingIcons}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute top-60 right-[10%] hidden md:block"
      >
        <BiMobile className="text-3xl text-green-400/25" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_5px_25px_rgba(74,222,128,0.2)]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white">
              Meu Currículo
            </span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Minha trajetória profissional, formação acadêmica e habilidades técnicas que me definem como desenvolvedor.
          </p>
          
          <motion.button
            onClick={handleDownloadCv}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 flex items-center gap-2 px-6 py-3 mx-auto bg-gradient-to-r from-green-500/80 to-green-600/80 rounded-full text-white font-medium shadow-[0_8px_20px_rgba(74,222,128,0.3)] hover:shadow-[0_8px_25px_rgba(74,222,128,0.5)] transition-all duration-300"
          >
            <HiDownload className="text-xl" />
            <span>Download CV Completo</span>
          </motion.button>
        </motion.div>
        
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[40px]"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sticky top-24 h-max"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <TabsTrigger 
                value="experience" 
                className="relative overflow-hidden group rounded-xl py-5 px-6 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-green-400/10 data-[state=active]:backdrop-blur-sm data-[state=active]:border-0 data-[state=active]:shadow-[0_4px_15px_rgba(74,222,128,0.2)]"
              > 
                <div className="flex items-center gap-3">
                  <FaUserTie className="text-xl text-green-400" />
                  <span className="data-[state=active]:text-white data-[state=active]:font-medium text-lg">Experiência</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="relative overflow-hidden group rounded-xl py-5 px-6 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-green-400/10 data-[state=active]:backdrop-blur-sm data-[state=active]:border-0 data-[state=active]:shadow-[0_4px_15px_rgba(74,222,128,0.2)]"
              > 
                <div className="flex items-center gap-3">
                  <FaUserGraduate className="text-xl text-green-400" />
                  <span className="data-[state=active]:text-white data-[state=active]:font-medium text-lg">Educação</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="about" 
                className="relative overflow-hidden group rounded-xl py-5 px-6 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-green-400/10 data-[state=active]:backdrop-blur-sm data-[state=active]:border-0 data-[state=active]:shadow-[0_4px_15px_rgba(74,222,128,0.2)]"
              > 
                <div className="flex items-center gap-3">
                  <FaCode className="text-xl text-green-400" />
                  <span className="data-[state=active]:text-white data-[state=active]:font-medium text-lg">Sobre mim</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <div className="min-h-[70vh] w-full bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <TimelineExperiences />
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <motion.h3 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white drop-shadow-[0_5px_15px_rgba(74,222,128,0.2)]"
                >
                  {education.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-white/60 mx-auto xl:mx-0 text-lg"
                >
                  {education.description}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                      className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col justify-center p-6 h-full shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                    >
                      {/* Bordas animadas */}
                      <motion.span 
                        variants={borderVariants}
                        animate="animate"
                        className="absolute top-0 left-0 w-full h-[2px]"
                      ></motion.span>
                      <motion.span 
                        variants={borderVariants}
                        animate="animate"
                        className="absolute bottom-0 left-0 w-full h-[2px]"
                        style={{ animationDelay: "0.5s" }}
                      ></motion.span>
                      <motion.span 
                        variants={borderVariants}
                        animate="animate"
                        className="absolute top-0 right-0 w-[2px] h-full"
                        style={{ animationDelay: "1s" }}
                      ></motion.span>
                      <motion.span 
                        variants={borderVariants}
                        animate="animate"
                        className="absolute top-0 left-0 w-[2px] h-full"
                        style={{ animationDelay: "1.5s" }}
                      ></motion.span>
                      
                      <div className="flex flex-col items-center lg:items-center gap-3 z-10 py-4">
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 * index, duration: 0.5 }}
                          className="text-green-400 font-semibold bg-green-400/10 px-5 py-1.5 rounded-full text-sm shadow-[0_4px_10px_rgba(74,222,128,0.2)]"
                        >
                          {item.duration}
                        </motion.span>
                        
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 * index, duration: 0.5 }}
                          className="text-xl text-center font-bold text-white drop-shadow-[0_2px_5px_rgba(255,255,255,0.2)]"
                        >
                          {item.course}
                        </motion.h3>
                        
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 * index, duration: 0.5 }}
                          className="flex items-center gap-3 mt-2"
                        >
                          <span className="w-[6px] h-[6px] rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]"></span>
                          <p className="text-white/70">{item.institution}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <motion.h3 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white drop-shadow-[0_5px_15px_rgba(74,222,128,0.2)]"
                >
                  {about.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white/70 mx-auto xl:mx-0 leading-relaxed text-lg"
                >
                  {about.description}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                  {/* Skills Section */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                  >
                    <h4 className="text-2xl font-bold mb-6 text-green-400 drop-shadow-[0_2px_5px_rgba(74,222,128,0.2)]">Habilidades</h4>
                    <div className="flex flex-wrap gap-3">
                      {about.skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(74, 222, 128, 0.3)",
                            transition: { duration: 0.2 } 
                          }}
                          className="bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm border border-green-400/20 shadow-[0_4px_10px_rgba(0,0,0,0.1)] cursor-default transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Hobbies Section */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                  >
                    <h4 className="text-2xl font-bold mb-6 text-green-400 drop-shadow-[0_2px_5px_rgba(74,222,128,0.2)]">Hobbies</h4>
                    <ul className="flex flex-col gap-4">
                      {about.hobbies.map((hobby, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 * index }}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          className="flex items-start gap-3 group transition-all duration-300"
                        >
                          <span className="min-w-[8px] h-[8px] mt-2 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)] group-hover:scale-125 transition-all duration-300"></span>
                          <p className="text-white/80 group-hover:text-white transition-colors duration-300">{hobby}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                
                {/* Resumo de Competências */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-6 bg-gradient-to-r from-green-400/20 to-green-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                >
                  <h4 className="text-2xl font-bold mb-6 text-white drop-shadow-[0_2px_5px_rgba(255,255,255,0.2)]">Resumo de Competências</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center mb-3">
                        <BiCodeAlt className="text-2xl text-green-400" />
                      </div>
                      <h5 className="text-lg font-medium mb-1">Desenvolvimento Front-end</h5>
                      <p className="text-white/60 text-sm text-center">Criação de interfaces web responsivas e modernas</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center mb-3">
                        <BiMobile className="text-2xl text-green-400" />
                      </div>
                      <h5 className="text-lg font-medium mb-1">Desenvolvimento Mobile</h5>
                      <p className="text-white/60 text-sm text-center">Aplicativos nativos e multiplataforma</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center mb-3">
                        <BiLaptop className="text-2xl text-green-400" />
                      </div>
                      <h5 className="text-lg font-medium mb-1">Design Responsivo</h5>
                      <p className="text-white/60 text-sm text-center">Interfaces adaptadas para todos os dispositivos</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
