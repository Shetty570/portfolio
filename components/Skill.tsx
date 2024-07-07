import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import skill from "../images/hero.jpeg";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out relative"
      >
        <Image
          src={skill}
          alt="Example Image"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
}

export default Skill;
