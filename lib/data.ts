import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import first from "@/public/first.png";
import second from "@/public/second.png";
import third from "@/public/third.png";
import fourth from "@/public/fourth.png";
import fifth from "@/public/fifth.png";
import sixth from "@/public/sixth.png";
import seventh from "@/public/seventh.png";

import reference1 from "@/public/juvence.jpeg";
import reference2 from "@/public/vladimir.jpeg";
import reference3 from "@/public/mahop.jpeg";

import wordanalyticsImg from "@/public/wordanalytics.png";
import { StaticImageData } from "next/image";
import { References } from "./types";
interface Project {
  title: string;
  description: string;
  tags: string[]; // just string[] instead of readonly
  imageUrl: StaticImageData;
  link: string;
}
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const references: References[] = [
  {
    picture: reference1,
    name: "Juvence Babagbeto",
    email: "director@eaglevisionworld.com",
    phone_number: "+233558329636",
    title: "CEO Eagle Vision Institute",
  },
  {
    picture: reference2,
    name: "Hounzanme Vladimir",
    email: "afriquetechinfo@gmail.com",
    phone_number: "+22997950881",
    title: "CEO Afriqtech",
  },
  {
    picture: reference3,
    name: "Christelle Ngo Mahop",
    email: "christmahop.hotmail.com",
    phone_number: "+33789456175",
    title: "PDG MAH-OPTION",
  },
];

export const experiencesData = [
  {
    title: "Bachelor degree in Network and Software Engineering",
    location: "Cotonou, Bénin",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Remote Front-End Developer",
    location: "Paris, France",
    description:
      "I worked as a webmaster developer for 1 years at MAHOPTION. I also upskilled to React front-end.",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Cotonou, Bénin",
    description:
      "I worked for 1 year at KAWERU GROUP and the A year at TRANXWORD. I also upskilled to full-stack development.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Accra, Ghana",
    description:
      "As an IT Officer, I was in charge of an institute's system. In addition to maintenance, I was called on to build several management apps. My stack includes React, MySQL, Tailwind, and Sequelize.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Front-end Developer",
    location: "Accra, Ghana",
    description:
      "I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, React Native and AntDesign. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
];

export const projectsData: Project[] = [
  {
    title: "Bombaa - Marketplace  (on-stagging)",
    description:
      "I worked as a frontend developer on this startup project for 1 year. Users can buy and sell vintage.",
    tags: ["React", "Next.js", "React Native", "TypeScript", "Tailwind"],
    imageUrl: first,
    link: "https://sandbox.bom-baa.com/",
  },
  {
    title: "Broadspectrum Ltd",
    description:
      "Responsive landing page of a fintech company. I was the front-end developer. It has features like contact,pagination.",
    tags: ["React", "Tailwind"],
    imageUrl: second,
    link: "https://bsl.com.gh/about",
  },
  {
    title: "GoGive Time",
    description:
      "A public web app for volunteering in Ghana. It connects organisations and volunteers. It has features like filtering, nexted forms, paginations, tables and authentication.",
    tags: [
      "React",
      "Next.js",
      "AntDesign",
      "Tailwind",
      "React hooks",
      "Redux Toolkit",
    ],
    imageUrl: third,
    link: "https://gogivetime.org/",
  },
  {
    title: "EVLI- SMS",
    description:
      "I worked as a full-stack developer on a management system used locally by a language school in Accra. Used for accounnting and students enrollement.",
    tags: ["React", "SQL", "Tailwind", "Mysql", "Nodejs", "Sequelize"],
    imageUrl: fourth,
    link: "#",
  },

  {
    title: "Ubiznews",
    description:
      "A public news app. A wordpress projeect linked to dailymotion api.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: fifth,
    link: "https://ubiznewstv.com/",
  },
  {
    title: "Save Tommorow",
    description:
      "I was a volunteer webmaster on this project which aim to build inclusive co-prosperity for present and future generations.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: sixth,
    link: "https://save-tomorrow.com/",
  },

  {
    title: "My Portfolio",
    description:
      "I worked on this project during my first Nextjs Course. A very excited project. It has features like contact form, react email and dark mode.",
    tags: ["Next.js", "Resend", "TypeScript", "Tailwind", "Framer"],
    imageUrl: seventh,
    link: "/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "AntDesign",
  "React Native",
  "MongoDB",
  "Redux",
  "Express",
] as const;
