"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
}

// Animações
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export default ClientWrapper;