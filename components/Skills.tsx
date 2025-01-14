// Skills.tsx
"use client";
import React from "react";
import Skill from "./ui/Skill";
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

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
        <Skill icon="html5" />
        <Skill icon="css3" />
        <Skill icon="js" />
        <Skill icon="github" />
        <Skill icon="reactjs" />
        <Skill icon="solidity" />
        <Skill icon="nodejs" />
        <Skill icon="postgresql" />
        <Skill icon="mongodb" />
        <Skill icon="firebase" />
        <Skill icon="nextjs2" />
        <Skill icon="typescript" />
        <Skill icon="python" />
        <Skill icon="mysql" />
        <Skill icon="postman" />
        <Skill icon="bootstrap5" />
        <Skill icon="tailwindcss" />
        <Skill icon="aws" />
        <Skill icon="docker" />
        <Skill icon="framer" />
        <Skill icon="prisma" />
        <Skill icon="shadcnui" />
        <Skill icon="vscode" />
      </div>
    </motion.div>
  );
}
