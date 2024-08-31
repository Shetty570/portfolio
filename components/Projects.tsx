// Projects.tsx
"use client";
import Image from "next/image";
import React from "react";
import netflix from "../images/netflix-3.jpg";
import insta from "../images/insta.jpg";
import expense from "../images/expense.png";
import iphone from "../images/iPhone.jpg";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const projects = [
  {
    title: "NETFLIX CLONE",
    techstack:
      "React.js, Tailwind CSS, Redux, Google Authentication, Stripe, Firebase",
    description:
      " Developed a Netflix-style platform with Google authentication, a beautiful home screen for movies, and a subscription page using Stripe for payments. Synchronized Stripe recurring payments with Firebase and deployed the final build using Firebase Hosting for scalability and security.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={netflix}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    github: "https://github.com/Shetty570/netflix",
  },
  {
    title: "IPHONE LANDING PAGE",
    techstack: "React.js, Tailwind CSS, Three.js, GSAP, Vite",
    description:
      "Developed dynamic 3D model rendering of the iPhone 15 Pro with Three.js and a custom video carousel using GSAP, integrated into a responsive React.js and Tailwind CSS application. Applied subtle, smooth animations via GSAP for improved user experience, ensuring device compatibility and code reusability in a Vite environment ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={iphone}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    github: "https://github.com/Shetty570/iphone-clone",
  },
  {
    title: "INSTA CLONE",
    techstack: "React.js, Swagger, Node.js, Express.js, MongoDB, JWT",
    description:
      "Implemented core Instagram-like features including photo/video sharing, secure user logins, and profile management, enhancing security with Firebase. Engineered a ReactJS-based admin panel and NodeJS-driven backend for reliable data management and seamless server communication.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={insta}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    github: "https://github.com/Shetty570/Insta-Clone",
  },
  {
    title: "EXPENSE TRACKER",
    techstack: "React.js, CSS, Node.js, Express.js",
    description:
      "Crafted an all-encompassing full-stack platform that enables both individuals and collectives to track their financial activities and identify spending trends through graphical representations. Integrated unique user sessions in the app, offering a cohesive environment for users and groups to efficiently log and supervise their financial allocations and limits ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={expense}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    github: "https://github.com/Shetty570/ExpenseTracker",
  },
];

type Props = {};

function Projects({}: Props) {
  // const projects = [1];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-400 text-2xl">
        Projects
      </h3>
      <div>
        <Carousel className="w-full max-w-lg">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-gradient-to-r from-black via-blue-800 to-black border-none ">
                    <CardContent className="flex flex-col aspect-square items-center border-transparent justify-center p-6">
                      <span className="text-2xl font-mono font-semibold text-white p-5">
                        {project.title}
                      </span>
                      <span className="text-lg font-mono font-medium pb-3 text-white">
                        {project.techstack}
                      </span>
                      <div className=" w-85 h-40 ">{project.content}</div>

                      <span className="text-sm md:text-base pt-3 text-white">
                        {project.description}
                      </span>
                      <Button asChild>
                        <Link href={project.github}>Github</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.div>
  );
}

export default Projects;
