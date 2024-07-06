"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import heropic from "../images/hero.jpeg";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hello, I'm Suhas Shetty",
      "Crafting-Code.tsx",
      "<TechEnthusiast/>",
      "{Problem Solver}",
      "Innovate.map(Daily)",
    ],
    loop: true,
    delaySpeed: 200,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="relative flex flex-col items-center justify-center">
        <BackgroundCircles />
        <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
          <Image
            className="rounded-full"
            src={heropic}
            alt="Suhas Shetty"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-cyan-500 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="pt-3">
          <span className="text-5xl lg:text-6xl font-semibold px-10">
            {text}
          </span>
          <Cursor cursorColor="#004060" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="hero">About</button>
          </Link>

          <Link href="#experience">
            <button className="hero">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="hero">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="hero">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
