"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaFigma, FaLock } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 px-4 md:px-8 lg:px-16"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project) => (
          <motion.div
            key={project.title}
            layoutId={project.title}
            onClick={() => setSelectedId(project.title)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={project.imageUrls[0]}
              alt={project.title}
              width={300}
              height={350}
              className="w-full h-[200px] sm:h-[300px] lg:h-[200px] object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                {project.github && (
                  <a
                    href={project.github === "private" ? "#" : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition ${
                      project.github === "private" ? "cursor-not-allowed" : ""
                    }`}
                    onClick={(e) => {
                      if (project.github === "private") {
                        e.preventDefault();
                      }
                    }}
                  >
                    {project.github === "private" ? (
                      <FaLock size={18} />
                    ) : (
                      <FaGithub size={18} />
                    )}
                  </a>
                )}
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition"
                  >
                    <FaFigma size={18} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          >
            <motion.div className="bg-white dark:bg-gray-800 rounded-lg max-w-5xl w-full p-8 relative shadow-lg">
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
              >
                &times;
              </button>
              {projectsData.find((project) => project.title === selectedId) && (
                <ProjectDetails
                  project={
                    projectsData.find(
                      (project) => project.title === selectedId
                    )!
                  }
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectDetails({
  project,
}: {
  project: (typeof projectsData)[number];
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-gray-500"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {project.title}
      </motion.h2>
      <motion.p
        className="text-gray-400 text-base mb-6 font-normal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {project.description}
      </motion.p>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Slider {...settings}>
          {project.imageUrls.map((url, index) => (
            <motion.div
              key={index}
              className="px-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={url}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-3 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {project.tags.map((tag, index) => (
          <motion.span
            key={tag}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {project.github && (
          <motion.a
            href={project.github === "private" ? "#" : project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${
              project.github === "private"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-900 hover:bg-gray-700"
            } text-white px-6 py-3 rounded-full transition`}
            whileHover={{ scale: project.github === "private" ? 1 : 1.05 }}
            whileTap={{ scale: project.github === "private" ? 1 : 0.95 }}
            onClick={(e) => {
              if (project.github === "private") {
                e.preventDefault();
              }
            }}
          >
            {project.github === "private" ? <FaLock /> : <FaGithub />}{" "}
            {project.github === "private" ? "Private Repository" : "GitHub"}
          </motion.a>
        )}
        {project.figma && (
          <motion.a
            href={project.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFigma /> Figma
          </motion.a>
        )}
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        )}
      </motion.div>

      {project.instructionsDAcces && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Access Instructions
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {project.instructionsDAcces}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-prev slick-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <MdArrowBack size={30} />
    </button>
  );
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-next slick-arrow bg-blue-500`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <MdArrowForward size={30} />
    </button>
  );
}
