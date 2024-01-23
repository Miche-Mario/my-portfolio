"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
      <div className="mb-3 font-light">
        <div className=" leading-12">
          After earning my degree in{" "}
          <span className="font-medium">Network and Software Engineering</span>,
          I dove into the world of code, determined to turn my passion into a
          career. I enrolled in an intensive coding bootcamp and absorbed
          everything I could about{" "}
          <span className="font-medium">full-stack web development</span>.<br />{" "}
          <p className="mt-6">
            Now, as a developer, I relish solving complex problems and bringing
            ideas to life with my core stack of{" "}
            <span className="font-medium">
              React, Next.js, Node.js, and MongoDB
            </span>
            . I'm always expanding my skills by learning new frameworks like
            Angular, TypeScript and AntDesign.
          </p>
          <br /> Outside of programming, I engage my curious mind by playing
          strategy games or learning about topics like{" "}
          <span className="font-medium">psychology and history</span>. As I
          search for a{" "}
          <span className="font-medium">full-time developer role</span>, I'm
          excited to join a team where I can grow as a programmer.I'm fluent in
          English, with French as my native language
          <br />{" "}
          <p className="mt-6">
            For me, code is more than a career - it's a lifelong passion.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
