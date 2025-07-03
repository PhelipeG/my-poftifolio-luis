"use client";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "../../components/ui/input";
import { info } from "../../data/info-data";
import { motion } from "framer-motion";
import { FiSend, FiMapPin, FiClock } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

export default function Contact() {
    // Variantes para animações
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
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    // Função para enviar o formulário (placeholder)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você implementaria a lógica de envio do formulário
        console.log("Formulário enviado");
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-[80vh] flex items-center py-16 relative overflow-hidden"
        >
            {/* Elementos de fundo decorativos */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-[1600px] mx-auto px-6 lg:px-8 relative z-10">
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
                        Vamos Conversar
                    </motion.span>

                    <motion.h1 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold mb-5 drop-shadow-[0_5px_20px_rgba(74,222,128,0.15)]"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-green-400">
                            Entre em Contato
                        </span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed"
                    >
                        Estou disponível para projetos freelance, colaborações ou oportunidades de trabalho.
                        Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.
                    </motion.p>
                </motion.div>

                <div className="flex flex-col xl:flex-row gap-12 items-start">
                    {/* Formulário de Contato */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-2 xl:order-none w-full xl:w-1/2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-8"
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white">Envie uma Mensagem</h2>
                            <p className="text-white/60">Preencha o formulário abaixo e retornarei em breve.</p>
                        </motion.div>
                        
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <motion.div variants={itemVariants} className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-white/80 font-medium">Nome Completo</label>
                                <div className="relative">
                                    <Input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        placeholder="Digite seu nome" 
                                        className="bg-white/5 border-white/10 backdrop-blur-sm focus:border-green-400/50 focus:ring-green-400/20 rounded-lg py-3 pl-4 pr-10 transition-all duration-300 placeholder:text-white/30 text-white"
                                    />
                                    <motion.div 
                                        whileHover={{ rotate: 20 }}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30"
                                    >
                                        <HiOutlineSparkles className="text-lg" />
                                    </motion.div>
                                </div>
                            </motion.div>
                            
                            <motion.div variants={itemVariants} className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white/80 font-medium">Email</label>
                                <div className="relative">
                                    <Input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Digite seu email" 
                                        className="bg-white/5 border-white/10 backdrop-blur-sm focus:border-green-400/50 focus:ring-green-400/20 rounded-lg py-3 pl-4 pr-10 transition-all duration-300 placeholder:text-white/30 text-white"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div variants={itemVariants} className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-white/80 font-medium">Mensagem</label>
                                <Textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Digite sua mensagem" 
                                    className="bg-white/5 border-white/10 backdrop-blur-sm focus:border-green-400/50 focus:ring-green-400/20 min-h-[150px] rounded-lg p-4 transition-all duration-300 placeholder:text-white/30 text-white resize-none"
                                />
                            </motion.div>
                            
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(74, 222, 128, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-green-500 to-green-400 text-black font-medium py-3 px-6 rounded-lg mt-2 transition-all duration-300 shadow-[0_8px_20px_rgba(74,222,128,0.2)] flex items-center justify-center gap-2"
                            >
                                <span>Enviar Mensagem</span>
                                <FiSend className="text-lg" />
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Informações de Contato */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 flex items-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 w-full xl:w-1/2"
                    >
                        <div className="w-full">
                            <motion.h2 
                                variants={itemVariants}
                                className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white"
                            >
                                Informações de Contato
                            </motion.h2>
                            
                            <motion.ul variants={containerVariants} className="flex flex-col gap-5 mb-10">
                                {info.map((item, index) => (
                                    <motion.li 
                                        key={index} 
                                        variants={itemVariants}
                                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                        className="flex gap-6 items-center p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 group hover:border-green-400/30"
                                    >
                                        <div className="w-[60px] h-[60px] rounded-xl bg-gradient-to-br from-green-400/20 to-green-400/10 border border-white/10 text-green-400 shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center group-hover:shadow-[0_4px_15px_rgba(74,222,128,0.2)] transition-all duration-300">
                                            <item.icon className="text-2xl" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-green-400 font-medium mb-1">{item.title}</p>
                                            <h3 className="text-white group-hover:text-white/90 transition-colors duration-300">{item.description}</h3>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>
                            
                            {/* Horário de Atendimento */}
                            <motion.div 
                                variants={itemVariants}
                                className="p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
                            >
                                <div className="flex gap-4 items-center mb-3">
                                    <div className="w-[40px] h-[40px] rounded-lg bg-gradient-to-br from-green-400/20 to-green-400/10 border border-white/10 text-green-400 flex items-center justify-center">
                                        <FiClock className="text-xl" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white">Horário de Atendimento</h3>
                                </div>
                                <div className="flex flex-col gap-2 text-white/70">
                                    <p>Segunda a Sexta: 9h às 18h</p>
                                    <p>Sábado: 9h às 12h</p>
                                    <p>Domingo: Fechado</p>
                                </div>
                            </motion.div>
                            
                            {/* Mídias Sociais */}
                            <motion.div 
                                variants={itemVariants}
                                className="mt-6 flex items-center gap-4"
                            >
                                <span className="text-white/60">Redes Sociais:</span>
                                <div className="flex gap-3">
                                    <motion.a 
                                        href="https://github.com/yourusername" 
                                        target="_blank"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:text-green-400 hover:border-green-400/30 transition-all duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </motion.a>
                                    <motion.a 
                                        href="https://linkedin.com/in/yourusername" 
                                        target="_blank"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:text-green-400 hover:border-green-400/30 transition-all duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                        </svg>
                                    </motion.a>
                                    <motion.a 
                                        href="https://twitter.com/yourusername" 
                                        target="_blank"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:text-green-400 hover:border-green-400/30 transition-all duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                        </svg>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                
                {/* Mapa de Localização */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="mt-16 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-[40px] h-[40px] rounded-lg bg-gradient-to-br from-green-400/20 to-green-400/10 border border-white/10 text-green-400 flex items-center justify-center">
                            <FiMapPin className="text-xl" />
                        </div>
                        <h3 className="text-xl font-medium text-white">Localização</h3>
                    </div>
                    <div className="rounded-xl overflow-hidden h-[300px] relative">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.108065937149!2d-43.35841!3d-2.566429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f690500000000%3A0x0!2zMsKwMzMnNTkuMSJTIDQzwrAyMScyOC43Ilc!5e0!3m2!1spt-BR!2sbr!4v1650907173951!5m2!1spt-BR!2sbr" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }}
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de localização"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                        <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}