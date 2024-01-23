"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { references } from "@/lib/data";

export default function References() {
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
      <SectionHeading>References</SectionHeading>
      <div className="grid md:grid-cols-3 md:gap-12 gap-4 grid-cols-1">
        {references.map((item) => (
          <div className="flex flex-col items-center">
            <div className="relative mb-5">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                <Image
                  src={item.picture}
                  alt={item.name}
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
              </motion.div>

              <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
              >
                👋
              </motion.span>
            </div>
            <p className=" font-medium text-sm">{item.name}</p>
            <p className=" font-normal text-sm">{item.title}</p>
            <div className=" text-sm font-thin">
              <a className="underline" href={`mailto:${item.email}`}>
                {item.email}
              </a>
              <a href={`tel:${item.phone_number}`}> {item.phone_number}</a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
