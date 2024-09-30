"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import MyPicture from "@/public/lui.jpeg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <div className="rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src={MyPicture}
              alt="Miche Mario GANHOU"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 object-cover transition-all duration-300 hover:scale-110"
            />
          </div>
          <motion.span
            className="absolute bottom-0 right-0 text-5xl"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-8 px-4 text-2xl font-bold !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Hello, I'm Miche Mario.
        </span>{" "}
        I'm a{" "}
        <span className="underline decoration-sky-500">
          fullstack developer
        </span>{" "}
        and{" "}
        <span className="underline decoration-sky-500">UI/UX enthusiast</span>{" "}
        with <span className="font-extrabold">8 years</span> of experience. I
        enjoy building <span className="italic">web & mobile apps</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <div className="flex gap-4">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer shadow-md hover:shadow-lg"
            href="https://www.linkedin.com/in/miche-mario-874790157/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin className="text-2xl" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer shadow-md hover:shadow-lg"
            href="https://github.com/Miche-Mario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare className="text-2xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
