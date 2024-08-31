"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExCard } from "./ExCard";
import { ExCard2 } from "./ExCard2";
import Image from "next/image";
import { Timeline } from "./ui/timeline";

function Experience() {
  const data = [
    {
      title: "2024 - September",
      content: (
        <div>
          <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
            Northeastern University
          </h2>
          <p className="text-base md:text-2xl mb-4 text-white max-w-4xl">
            Master of Science, Information Systems
          </p>
          <p className="text-base md:text-base mb-4 text-white max-w-4xl">
            Boston, MA
          </p>
        </div>
      ),
    },
    {
      title: "2024 - May",
      content: (
        <div>
          <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
            Application Development Analyst
          </h2>
          <p className="text-base md:text-2xl mb-4 text-white max-w-4xl">
            Accenture
          </p>
          <p className="text-base md:text-base mb-4 text-white max-w-4xl">
            Bangalore, India
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Created interactive components with React.js and React Hooks for
            projects, increasing code reuse and accelerating development cycles
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Optimized server performance with Node.js and Express.js,
            integrating REST APIs, enhancing functionality and user satisfaction
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
            Application Development Associate
          </h2>
          <p className="text-base md:text-2xl mb-4 text-white max-w-4xl">
            Accenture
          </p>
          <p className="text-base md:text-base mb-4 text-white max-w-4xl">
            Bangalore, India
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Coordinated cross-functional teams to deploy RESTful APIs, enhancing
            data exchange and performance
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Executed full web design and development projects, combining
            frontend and backend technologies, increasing project delivery speed
            and client satisfaction
          </p>
        </div>
      ),
    },
    {
      title: "2016-2020",
      content: (
        <div>
          <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
            Visvesvaraya Technological University
          </h2>
          <p className="text-base md:text-2xl mb-4 text-white max-w-4xl">
            Bachelor of Engineering, Mechanical Engineering
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm">
              Bangalore, India
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col relative min-h-screen text-left max-w-full px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-500 text-2xl">
        Experience
      </h3>
      <div className="w-full overflow-hidden">
        <Timeline data={data} />
      </div>
    </div>
  );
}

export default Experience;
