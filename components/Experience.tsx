"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExCard } from "./ExCard";
import { ExCard2 } from "./ExCard2";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-left max-w-full px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex overflow-x-auto snap-x snap-mandatory p-10 gap-10 justify-start md:justify-center">
        <div className="snap-center flex-shrink-0 w-full md:w-auto md:max-w-[500px]">
          <ExCard />
        </div>
        <div className="snap-center flex-shrink-0 w-full md:w-auto md:max-w-[500px]">
          <ExCard2 />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
