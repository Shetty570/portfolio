"use client";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

type Props = {};

function Header({}: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-10 py-2 bg-black bg-opacity-20">
      {/* Left Spacing for balance */}
      <div className="flex-1"></div>

      {/* Social Icons Section */}
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center justify-center space-x-4"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/suhassshetty/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Shetty570"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
        </Link>
      </motion.div>

      {/* Download Resume Button */}
      <a
        href="https://drive.google.com/file/d/1fOYNPybVWMNK6KRVKXUAUZ6OXfS39DTz/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex justify-end"
      >
        {/* Show a full button on medium and larger screens, and just an icon on small screens */}
        <button className="hidden sm:block px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
          Download Resume
        </button>
        <Download className="block sm:hidden text-cyan-500" size={24} />
      </a>
    </header>
  );
}

export default Header;
