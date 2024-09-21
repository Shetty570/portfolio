"use client";
import React from "react";
import { Timeline } from "./ui/timeline";

function Experience() {
  const data = [
    {
      title: "2023 - September",
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
      title: "2023 - May",
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
          <ul className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <li>
              Created interactive components with React.js and React Hooks for
              projects, increasing code reuse and accelerating development
              cycles
            </li>
            <li>
              Optimized server performance with Node.js and Express.js,
              integrating REST APIs, enhancing functionality and user
              satisfaction
            </li>
          </ul>
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
          <ul className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <li>
              Coordinated cross-functional teams to deploy RESTful APIs,
              enhancing data exchange and performance
            </li>
            <li>
              Executed full web design and development projects, combining
              frontend and backend technologies, increasing project delivery
              speed and client satisfaction
            </li>
          </ul>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xm font-normal mb-8"></p>
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
    <div className="flex flex-col relative text-left max-w-full px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex flex-col mt-36 overflow-hidden">
        <div className="w-full pt-15 h-[950px] overflow-y-auto">
          <Timeline data={data} />
        </div>
      </div>
    </div>
  );
}

export default Experience;
