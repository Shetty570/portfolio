import { motion } from "framer-motion";
import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.5, 2, 2.5, 1],
        opacity: [0.1, 0.3, 0.5, 0.7, 1],
        borderRadius: ["20%", "30%", "50%", "70%", "20%"],
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="absolute flex justify-center items-center"
    >
      <div className="absolute border border-cyan-400 rounded-full h-[300px] w-[300px] animate-ping" />
      <div className="absolute border border-cyan-700 rounded-full h-[200px] w-[200px]" />
      <div className="absolute border border-cyan-700 rounded-full h-[500px] w-[500px]" />
      <div className="absolute border border-cyan-400 rounded-full h-[650px] w-[650px] animate-pulse" />
      <div className="absolute border border-cyan-700 rounded-full h-[800px] w-[800px]" />
    </motion.div>
  );
}

export default BackgroundCircles;
