"use client";
import React from "react";
import { motion } from "framer-motion";
import exp from "../images/hero.jpeg";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gradient-to-r from-[#080b6ce0] via-blue-800 to-[#080b6ce0]
     p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] relative object-cover"
      >
        <Image
          src={exp}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>
      <div className="px-9 md:px-10">
        <h4 className="text-4xl font-light">Associate</h4>
        <p className="font-bold text-2xl mt-1">Accenture</p>
        <div className="flex space-x-2 my-2">{/* {tech used} */}</div>
        <p className="uppercase py-5 text-cyan-400">Started .......</p>
        <ul>
          <li>ponits</li>
          <li>points </li>
          <li>points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
