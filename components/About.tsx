"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import aboutpic from "../images/about.jpeg";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center"
    >
      {/* Section Heading */}
      <h3 className="absolute top-16 sm:top-20 uppercase tracking-[15px] sm:tracking-[20px] text-cyan-500 text-xl sm:text-2xl">
        About
      </h3>

      {/* Image Container */}
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-shrink-0 mt-28 sm:mt-32 md:mt-36 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 relative"
      >
        <Image
          src={aboutpic}
          alt="About Image"
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* Text Container */}
      <div className="space-y-5 sm:space-y-10 px-5 sm:px-10 mt-10 sm:mt-20 md:mt-0 flex-1">
        <h4 className="text-2xl sm:text-4xl font-semibold">
          Here is <span className="underline decoration-cyan-500">my</span>{" "}
          background
        </h4>
        <p className="text-sm sm:text-base leading-relaxed">
          Hi there! I&apos;m Suhas Shetty, a software engineer with a passion
          for full-stack development and Web3 technologies. I&apos;m pursuing a
          Master of Science in Information Systems at Northeastern University,
          where I&apos;ve honed my skills in front-end and back-end development
          using technologies like React.js, Node.js, and databases. Previously
          at Accenture, I worked on developing scalable web applications,
          optimizing server performance, and leading a team to build a content
          management system. I&apos;m excited to leverage my expertise to create
          innovative solutions.
        </p>
      </div>
    </motion.div>
  );
}
