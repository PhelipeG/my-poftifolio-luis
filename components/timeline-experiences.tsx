"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experience } from "@/data/experience-data";

export default function Timeline() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 lg:px-8 p-4">
      <div className="relative">
        {/* Vertical line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8, duration: 1, ease: "easeIn" },
          }}
          className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-500 transform -translate-x-1/2"
        ></motion.div>

        {/* Timeline items */}
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-2/12 lg:w-1/12"></div>
            <div className="z-20">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>
            <Card className="w-8/12 lg:w-9/12 bg-slate-100 text-green-500">
              <CardHeader>
                <CardTitle className=" text-sm">{item.title}</CardTitle>
                <span className="font-bold text-primary">
                  {item.enterprise}
                </span>
                <CardDescription className="text-primary">
                  {item.date}
                </CardDescription>
              </CardHeader>
              {/* <CardContent className="text-gray-500">
                <p>{item.description}</p>
              </CardContent> */}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
