"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  FaCode,
  FaGamepad,
  FaBrain,
  FaHistory,
  FaBriefcase,
  FaLanguage,
} from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3 font-light text-lg">
        <div className="leading-12">
          <FaCode className="inline-block mr-2 text-blue-500" />
          After earning my degree in{" "}
          <span className="font-medium text-blue-500">
            Network and Software Engineering
          </span>
          , I dove into the world of code, determined to turn my passion into a
          career. I enrolled in an intensive coding bootcamp and absorbed
          everything I could about{" "}
          <span className="font-medium text-blue-500">
            full-stack web development
          </span>
          .<br />{" "}
          <p className="mt-6">
            <FaCode className="inline-block mr-2 text-blue-500" />
            Now, as a developer, I relish solving complex problems and bringing
            ideas to life with my core stack of{" "}
            <span className="font-medium text-blue-500">
              React, Next.js, React Native, Node.js, TypeScript, MySQL, MongoDB
              and TailwindCSS
            </span>
            . I'm always expanding my skills by learning new frameworks like
            Angular and Nest.js.
          </p>
          <br />
          <FaGamepad className="inline-block mr-2 text-green-500" />
          Outside of programming, I engage my curious mind by playing strategy
          games or learning about topics like{" "}
          <FaBrain className="inline-block mr-2 text-yellow-500" />
          <span className="font-medium text-yellow-500">
            psychology and the world's history
          </span>
          . As I search for a{" "}
          <FaBriefcase className="inline-block mr-2 text-red-500" />
          <span className="font-medium text-red-500">
            full-time developer role
          </span>
          , I'm excited to join a team where I can grow as a programmer.
          <FaLanguage className="inline-block mr-2 text-purple-500" />
          I'm fluent in English, with French as my native language
          <br />{" "}
          <p className="mt-6">
            <FaCode className="inline-block mr-2 text-blue-500" />
            For me, code is more than a career - it's a lifelong passion.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
