import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Suhas's portfolio",
  description: "Welcome to Suhas's portfolio",
};

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-black via-blue-700 to-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="hero" className="snap-center">
        <Hero /> 
      </section>
    </main>
  );
}
