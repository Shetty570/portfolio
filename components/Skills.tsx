// Skills.tsx
"use client";
import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-400 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill icon="html5" />
        <Skill icon="css3" />
        <Skill icon="js" />
        <Skill icon="github" />
        <Skill icon="reactjs" />
        <Skill icon="nodejs" />
        <Skill icon="postgresql" />
        <Skill icon="mongodb" />
        <Skill icon="firebase" />
        <Skill icon="nextjs" />
        <Skill icon="typescript" />
        <Skill icon="python" />
        <Skill icon="mysql" />
        <Skill icon="postman" />

        <Skill icon="bootstrap5" />
        <Skill icon="tailwindcss" />
      </div>
    </motion.div>
  );
}
