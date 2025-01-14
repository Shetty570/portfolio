// Skill.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

type Props = {
  icon: string;
};

function Skill({ icon }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        transition={{ duration: 1.25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-full border-none object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out relative"
      >
        <StackIcon name={icon} className="skill-icon w-full h-full" />
      </motion.div>
    </div>
  );
}

export default Skill;
