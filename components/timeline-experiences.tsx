"use client";
import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/experience-data";

export default function Timeline() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-accent">experiência</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold leading-none text-[#111318] md:text-6xl dark:text-white">
          Trajetória com produto, negócio e execução.
        </h2>
      </div>

      <div className="relative grid gap-4">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-accent via-accent-hover to-[#d7deea] md:block dark:to-white/20"
        />

        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12, ease: "easeOut", duration: 0.55 }}
            className="relative rounded-lg border border-[#d7deea] bg-white p-5 shadow-[0_10px_30px_rgba(41,54,78,0.08)] md:ml-12 md:p-7 dark:border-white/10 dark:bg-white/[0.055]"
          >
            <div className="absolute -left-[39px] top-8 hidden size-3 rounded-full bg-accent shadow-[0_0_0_8px_rgba(229,37,33,0.12)] md:block" />
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{item.date}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-[#111318] md:text-3xl dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-accent">{item.enterprise}</p>
              </div>
              <span className="w-fit rounded-full border border-[#d7deea] px-3 py-1 font-mono text-xs text-[#6a7489] dark:border-white/10 dark:text-white/45">
                0{index + 1}
              </span>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#4f5b70] md:text-base dark:text-white/70">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
