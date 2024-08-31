"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="text-white h-screen w-full bg-gradient-to-r from-black via-indigo-900 to-black snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0"
    >
      <Header />
      <section id="hero" className="snap-start h-screen w-full">
        <Hero />
      </section>
      <section id="about" className="snap-start h-screen w-full">
        <About />
      </section>
      <section id="experience" className="snap-start min-h-screen w-full">
        <Experience />
      </section>
      <section id="skills" className="snap-start h-screen w-full">
        <Skills />
      </section>
      <section id="projects" className="snap-start h-screen w-full">
        <Projects />
      </section>
      <section id="contact" className="snap-start h-screen w-full">
        <ContactMe />
      </section>
    </motion.main>
  );
}
