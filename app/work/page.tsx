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
import { BsGithub, BsArrowUpRightCircle } from "react-icons/bs";

export default function Work() {
  // Variantes de animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-400">
            Meus Projetos
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent rounded-full mt-2"></div>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="max-w-[380px] w-full rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative w-full h-[220px] overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href={project.link} target="_blank" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-accent/90 text-black font-medium px-4 py-2 rounded-full flex items-center gap-2"
                    >
                      Ver projeto <BsArrowUpRightCircle />
                    </motion.div>
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h2>
                <p className="text-white/70 text-sm mb-4 line-clamp-3 h-[60px]">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack &&
                    project.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-accent font-medium backdrop-blur-sm"
                      >
                        {item.name}
                      </span>
                    ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <Link href={project.link} target="_blank" aria-label={`Ver repositório de ${project.title}`}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center group transition-colors duration-300 hover:bg-accent/20">
                          <BsGithub className="text-white text-xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-white/10 backdrop-blur-md border-white/20">
                          <p>Repositório no Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  
                  <span className="text-xs text-white/50 italic">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
