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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </motion.div>
  );
}
