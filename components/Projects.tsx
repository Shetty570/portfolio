// Projects.tsx
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
import { Button } from "./ui/button";
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

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-center mx-auto max-w-6xl p-8"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-400 text-2xl mb-8">
        Projects
      </h3>
      <div className="absolute top-32 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gradient-to-r from-black via-blue-800 to-black border-none"
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              {project.image && (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={300}
                  height={200}
                  className="object-cover rounded-lg mb-4"
                />
              )}
              <h4 className="text-xl font-mono font-semibold text-white mb-2">
                {project.title}
              </h4>
              <p className="text-sm font-mono font-medium text-gray-300 mb-4 text-center">
                {project.techstack}
              </p>
              <Button asChild>
                <Link href={project.github} className="text-white">
                  View on GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
