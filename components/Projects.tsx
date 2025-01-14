"use client";
import Image from "next/image";
import React from "react";
import netflix from "../images/netflix-3.jpg";
import insta from "../images/insta.jpg";
import expense from "../images/expense.png";
import iphone from "../images/iPhone.jpg";
import bitcoin from "../images/bitcoin.png";
import NFT from "../images/NFT.png";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

const projects = [
  {
    title: "BITCOIN EXPLORER",
    techstack: "React.js, Tailwind CSS, Rust, PostgreSQL, Docker, AWS",
    image: bitcoin,
    github: "https://github.com/Shetty570/bitcoin_explorer",
  },
  {
    title: "NFT MARKETPLACE",
    techstack: "Next.js, Tailwind CSS, Solidity, Ethereum",
    image: NFT,
    github: "https://github.com/Shetty570/marketplace",
  },
  {
    title: "NETFLIX CLONE",
    techstack:
      "React.js, Tailwind CSS, Redux, Google Authentication, Stripe, Firebase",
    image: netflix,
    github: "https://github.com/Shetty570/netflix",
  },
  {
    title: "IPHONE LANDING PAGE",
    techstack: "React.js, Tailwind CSS, Three.js, GSAP, Vite",
    image: iphone,
    github: "https://github.com/Shetty570/iphone-clone",
  },
  {
    title: "INSTA CLONE",
    techstack: "React.js, Swagger, Node.js, Express.js, MongoDB, JWT",
    image: insta,
    github: "https://github.com/Shetty570/Insta-Clone",
  },
  {
    title: "Visit My GitHub",
    techstack: "Explore more projects and repositories",
    github: "https://github.com/Shetty570",
  },
];

function Projects() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Container with padding for all screen sizes */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center uppercase tracking-[20px] text-cyan-400 text-2xl mb-12"
        >
          Projects
        </motion.h3>

        {/* Scrollable container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          {/* Grid container with vertical scroll on mobile */}
          <div
            className="
            grid grid-cols-1 gap-6
            max-h-[70vh] overflow-y-auto
            sm:max-h-full sm:overflow-visible sm:grid-cols-2
            lg:grid-cols-3
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400/80
            snap-y snap-mandatory
            px-2
          "
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="
                  w-full
                  bg-black bg-opacity-70 border-none
                  transform transition-all duration-300 hover:scale-105
                  snap-center
                "
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  {project.image && (
                    <div className="w-full h-48 relative mb-4">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover rounded-lg border-2 border-gray-300"
                      />
                    </div>
                  )}
                  <h4 className="text-xl font-mono font-semibold text-white mb-2 text-center">
                    {project.title}
                  </h4>
                  <p className="text-sm font-mono font-medium text-gray-300 mb-4 text-center">
                    {project.techstack}
                  </p>
                  <Link
                    href={project.github}
                    className="text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg w-full text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
