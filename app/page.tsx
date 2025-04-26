import { Button } from "@/components/ui/button";
import { ProfilePic } from "../components/profile-pic";
import { Social } from "../components/social-links";
import ClientWrapper from "@/components/client-wrapper";
import CarrouselSkills from "@/components/carrousel-skills";
import dynamic from "next/dynamic";

// Importando o componente de serviços com lazy loading
const ServicesSection = dynamic(() => import("@/components/services-section"), { ssr: true });
const DownloadButton = dynamic(() => import("@/components/ui/download-button"), { ssr: false });
const ContactButton = dynamic(() => import("@/components/ui/contact-button"), { ssr: false });

export default function Home() {
  return (
    <div className="h-full min-h-screen py-12">
      <div className="container mx-auto">
        {/* Hero Section */}
        <ClientWrapper>
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-20 xl:pt-8 xl:pb-20">
            <div className="text-center xl:text-left order-2 xl:order-none max-w-2xl">
              <span className="inline-block py-1 px-4 rounded-full border border-green-400/30 bg-green-400/10 text-green-400 font-medium text-sm mb-6">
                Desenvolvedor Front-end e Mobile
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_5px_15px_rgba(74,222,128,0.15)]">
                Olá, me chamo {" "}
                <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                  Luis Felipe Guilhao
                </span>
              </h1>
              
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Desenvolvendo soluções digitais de alta qualidade com foco em experiência do usuário, 
                desempenho e código limpo para criar produtos que causam impacto.
              </p>
              
              <div className="flex flex-col xl:flex-row items-center gap-5">
                <DownloadButton />

                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-12 h-12 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full flex justify-center items-center text-white text-xl hover:border-green-400/50 hover:text-green-400 hover:scale-110 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 xl:order-none relative">
              <div className="relative z-10">
                <ProfilePic />
              </div>
              
              {/* Efeito de brilho atrás da imagem */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </ClientWrapper>
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Stats Counter */}
        <div className="my-20 py-14 px-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2+</div>
              <div className="text-white/70">Anos de experiência</div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-white/70">Projetos completos</div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-white/70">Clientes satisfeitos</div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-white/70">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Carousel */}
      <div>
        <CarrouselSkills />
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-green-400/20 to-purple-500/20 backdrop-blur-md rounded-3xl py-16 px-8 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">Estou disponível para projetos freelance, colaborações e oportunidades de trabalho remoto.</p>
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
