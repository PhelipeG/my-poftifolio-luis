"use client";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projects-data";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsGithub } from "react-icons/bs";

export default function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#27272c] p-6 rounded-lg shadow-lg w-[420px] h-[600px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 rounded-lg"
              />
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-white/60 mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.stack &&
                  project.stack.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-green-500 bg-[#27272c] px-2 py-1 rounded"
                    >
                      {item.name}
                    </li>
                  ))}
              </ul>
              <div className="flex items-center gap-4">
                <Link href={project.link} className="">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositório no Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
