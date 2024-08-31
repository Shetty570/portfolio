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
      className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative flex-shrink-0 mb-5 md:mb-0"
      >
        <div className="w-32 h-32 md:w-48 md:h-48 lg:w-96 lg:h-96 relative">
          <Image
            src={aboutpic}
            alt="About Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full md:rounded-lg lg:rounded-lg object-cover"
          />
        </div>
      </motion.div>
      <div className="space-y-5 px-5 md:px-10 md:space-y-10 mt-5 md:mt-0">
        <h4 className="text-2xl md:text-4xl font-semibold ">
          Here is <span className="underline decoration-cyan-400">my</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          Hi there! I&apos;m Suhas Shetty, a software engineer with a strong
          passion for Web3 technologies, currently pursuing a Master of Science
          in Information Systems at Northeastern University. My academic
          background includes advanced coursework in engineering design, data
          science, and database architecture, equipping me with robust skills in
          both front-end and back-end development using technologies like
          React.js, Node.js, and various databases. My professional experience
          at Accenture in Bangalore involved developing scalable web
          applications, optimizing server performance, and leading a team to
          create a content management system. Now, I&apos;m eager to apply my
          skills to the decentralized future of Web3, focusing on blockchain
          technology, smart contracts, and building innovative decentralized
          applications (dApps). Let&apos;s connect and explore how I can
          contribute to your next project in the Web3 space!
        </p>
      </div>
    </motion.div>
  );
}
