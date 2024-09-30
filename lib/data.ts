import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import reference1 from "@/public/juvence.jpeg";
import reference2 from "@/public/vladimir.jpeg";
import reference3 from "@/public/mahop.jpeg";

import { References } from "./types";

import crypto1 from "@/public/assets/crypto/1.png";
import crypto2 from "@/public/assets/crypto/2.png";
import crypto3 from "@/public/assets/crypto/3.png";

import zeyhii0 from "@/public/assets/zeyhii/0.png";
import zeyhii000 from "@/public/assets/zeyhii/000.png";
import zeyhii01 from "@/public/assets/zeyhii/01.png";
import zeyhii001 from "@/public/assets/zeyhii/001.png";
import zeyhii1 from "@/public/assets/zeyhii/1.png";
import zeyhii2 from "@/public/assets/zeyhii/2.png";
import zeyhii3 from "@/public/assets/zeyhii/3.png";
import zeyhii4 from "@/public/assets/zeyhii/4.png";
import zeyhii5 from "@/public/assets/zeyhii/5.png";
import zeyhii6 from "@/public/assets/zeyhii/6.png";
import zeyhii7 from "@/public/assets/zeyhii/7.png";
import zeyhii8 from "@/public/assets/zeyhii/8.png";
import zeyhii9 from "@/public/assets/zeyhii/9.png";
import zeyhii10 from "@/public/assets/zeyhii/10.png";
import zeyhii11 from "@/public/assets/zeyhii/11.png";

import zeyhiiweb1 from "@/public/assets/zeyhiiweb/1.png";
import zeyhiiweb2 from "@/public/assets/zeyhiiweb/2.png";
import zeyhiiweb3 from "@/public/assets/zeyhiiweb/3.png";
import zeyhiiweb4 from "@/public/assets/zeyhiiweb/4.png";
import zeyhiiweb5 from "@/public/assets/zeyhiiweb/5.png";
import zeyhiiweb6 from "@/public/assets/zeyhiiweb/6.png";
import zeyhiiweb7 from "@/public/assets/zeyhiiweb/7.png";
import zeyhiiweb8 from "@/public/assets/zeyhiiweb/8.png";

import gogivetime1 from "@/public/assets/gogivetime/1.png";
import gogivetime2 from "@/public/assets/gogivetime/2.png";
import gogivetime3 from "@/public/assets/gogivetime/3.png";
import gogivetime4 from "@/public/assets/gogivetime/4.png";
import gogivetime5 from "@/public/assets/gogivetime/5.png";

import lms1 from "@/public/assets/lms/1.png";
import lms2 from "@/public/assets/lms/2.png";
import lms3 from "@/public/assets/lms/3.png";
import lms4 from "@/public/assets/lms/4.png";
import lms5 from "@/public/assets/lms/5.png";
import lms6 from "@/public/assets/lms/6.png";
import lms7 from "@/public/assets/lms/7.png";
import lms8 from "@/public/assets/lms/8.png";
import lms9 from "@/public/assets/lms/9.png";
import lms10 from "@/public/assets/lms/10.png";
import lms11 from "@/public/assets/lms/11.png";
import lms12 from "@/public/assets/lms/12.png";
import lms13 from "@/public/assets/lms/13.png";
import lms14 from "@/public/assets/lms/14.png";
import lms15 from "@/public/assets/lms/15.png";
import lms16 from "@/public/assets/lms/16.png";
import lms17 from "@/public/assets/lms/17.png";

import evli1 from "@/public/assets/evli/1.png";

import ubiznews1 from "@/public/assets/ubiznews/1.png";
import ubiznews2 from "@/public/assets/ubiznews/2.png";
import ubiznews3 from "@/public/assets/ubiznews/3.png";

import bombaa0 from "@/public/assets/bombaa/0.png";
import bombaa01 from "@/public/assets/bombaa/01.png";
import bombaa1 from "@/public/assets/bombaa/1.png";
import bombaa2 from "@/public/assets/bombaa/2.png";
import bombaa3 from "@/public/assets/bombaa/3.png";
import bombaa4 from "@/public/assets/bombaa/4.png";
import bombaa5 from "@/public/assets/bombaa/5.png";
import bombaa6 from "@/public/assets/bombaa/6.png";
import bombaa7 from "@/public/assets/bombaa/7.png";
import bombaa8 from "@/public/assets/bombaa/8.png";

import portfolio1 from "@/public/assets/portfolio/1.png";
import portfolio2 from "@/public/assets/portfolio/2.png";

import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrls: StaticImageData[] | string[];
  link: string;
  github?: string; // Ajoutez cette ligne pour inclure la propriété github
  figma?: string; // Nouvelle propriété ajoutée
  instructionsDAcces?: string; // Nouvelle propriété ajoutée
};

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
      "I graduated after 3 years of intensive study in Network and Software Engineering. My curriculum included practical projects in web development, object-oriented programming, and database design. I gained a solid foundation in algorithms and data structures. Immediately after graduation, I secured a position as a front-end developer, putting my skills in HTML, CSS, and JavaScript into practice. During my studies, I also participated in coding competitions and contributed to open-source projects, which enhanced my problem-solving abilities and collaborative skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Remote Front-End Developer",
    location: "Paris, France",
    description:
      "I worked as a webmaster developer for 1 year at MAHOPTION, a Paris-based event company. My responsibilities included maintaining and updating the company's website, optimizing performance, and enhancing user experience. Concurrently, I deepened my front-end development skills, focusing particularly on React. I participated in redesigning several key sections of the site, using Wordpress and React to create more dynamic and responsive user interfaces. This experience allowed me to develop a solid understanding of the specific needs of the event industry and gain valuable expertise in integrating modern technologies within an event management platform. I also collaborated with the design team to ensure seamless integration of new events on the website and implemented analytics tools to track user behavior and improve conversion rates.",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Cotonou, Bénin",
    description:
      "For two years, I worked as a full-stack developer, first at KAWERU GROUP and then at TRANXWORD. This period was crucial for my professional growth. At KAWERU GROUP, I was involved in developing web applications, using, Laravel, React  and Node.js. I gained valuable experience in managing MongoDB databases and integrating RESTful APIs. At TRANXWORD, I deepened my skills by working on a professional social network. I implemented advanced networking features, optimized application performance. This experience allowed me to master the entire software development lifecycle, from conception to production, while honing my problem-solving and agile project management skills. Throughout this time, I consistently delivered high-quality code, met tight deadlines, and contributed to the success of multiple projects, preparing me for more challenging roles in the future.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Accra, Ghana",
    description:
      "As the IT Officer, I was responsible for managing an EAGLE VISION LANGUAGE INSTITUTE entire system. Beyond routine maintenance, I was tasked with developing a crucial management applications. I designed and implemented a comprehensive student management system, incorporating features such as online registration, payment tracking, and course management. Additionally, I developed an analytical dashboard to assist the management in data-driven decision-making. My technology stack included React for dynamic user interfaces, MySQL for robust database management, Tailwind for efficient responsive design, and Sequelize as an ORM for seamless database interaction. This experience significantly enhanced my full-stack development skills and project management capabilities within an educational IT environment.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Accra, Ghana",
    description:
      "At SoftinHub, I have held a Front-End Developer position for over a year, working on diverse and innovative projects. My tech stack includes React, Next.js, TypeScript, Tailwind, React Native, and AntDesign, enabling me to create high-performance and aesthetically pleasing web and mobile applications. I have contributed to the development of several enterprise applications, focusing on performance optimization and user experience. My role also involves close collaboration with design and project management teams, as well as participation in strategic product planning. This experience has allowed me to refine my skills in agile development and continuous integration. Notably, I led the development of an internal project management application that improved team efficiency by 30%. Currently, I am seeking new full-time opportunities to continue growing professionally and make significant contributions to innovative projects.",
    icon: React.createElement(FaReact),
    date: "2023 - September 2024",
  },
  {
    title: "Full-Stack Developer (Personal Projects)",
    location: "Accra, Ghana",
    description:
      "I'm currently dedicated to personal projects to refine my skills. I'm working on various web and mobile applications, using modern technologies such as React Native, Next.js, Node.js, and MongoDB. These projects allow me to deepen my understanding of full-stack development and explore new technologies. I'm open to full-time employment opportunities where I could bring my creativity and technical skills to a dynamic team.",
    icon: React.createElement(FaReact),
    date: "2023 - September 2024",
  },
];

export const projectsData: Project[] = [
  {
    title: "Crypto Pink World Exchange",
    description:
      "CryptoPing World Exchange is a platform that allows users to exchange their cryptocurrencies for real money, buy cryptocurrencies, as well as request and receive crypto quickly and securely. His simple and intuitive interface makes managing transactions easy, providing a smooth experience for both beginners and experienced users.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Internalization",
      "Clerk Authentication",
      "Next.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "Node.js",
      "Stripe",
      "Coinbase",
      "Paypal",
      "Zod",
      "JWT",
      "Bcrypt",
    ],
    imageUrls: [crypto1, crypto2, crypto3],
    github: "https://github.com/Miche-Mario/crypto",
    link: "https://vercel.com/miche-marios-projects/crypto",
    instructionsDAcces:
      "No specific instructions. Just explore and enjoy the crypto world.",
  },
  {
    title: "Zeyhii - Mobile App",
    description:
      "Zeyhii is a mobile application for sending parcels between individuals. It connects travelers who want to make their trips more profitable with individuals who want to send a package at a lower cost. This service is for travelers as well as for parcel senders. Post a travel ad in a few clicks to be put in touch with a sender.",
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Tailwind",
      "Internalization",
      "AntDesign",
      "Expo",
      "MongoDB",
      "Socket.io",
      "Node.js",
      "Express",
      "Redux",
      "Redux Toolkit",
      "Google Map Api",
      "Cloudinary",
      "Chart.js",
      "Axios",
      "Formik",
      "Yup",
    ],
    imageUrls: [
      zeyhii0,
      zeyhii000,
      zeyhii01,
      zeyhii001,
      zeyhii1,
      zeyhii2,
      zeyhii3,
      zeyhii4,
      zeyhii5,
      zeyhii6,
      zeyhii7,
      zeyhii8,
      zeyhii9,
      zeyhii10,
      zeyhii11,
    ],
    link: "https://expo.dev/preview/update?message=registre&updateRuntimeVersion=1.0.0&createdAt=2024-09-30T10%3A00%3A15.884Z&slug=exp&projectId=40676d0c-36e8-4fcc-a092-1088a8986149&group=2a087e36-5fe9-4281-bc98-1184b69d1b1b",
    figma:
      "https://www.figma.com/design/20KmbRAOlOKgqAVcRxWFl5/Zeyhii?node-id=899-1255&node-type=frame&t=VmLBD1EgayO1hxdr-0",
    instructionsDAcces:
      "Scan the QR code to access the app. The app is available in English and French. The auth is not required.",
    github: "private",
  },
  {
    title: "Zeyhii - Dashboard App",
    description:
      "Zeyhii Control Pannel . Zeyhii a mobile application for sending parcels between individuals. It connects travelers who want to make their trips more profitable with individuals who want to send a package at a lower cost. This service is for travelers as well as for parcel senders. Post a travel ad in a few clicks to be put in touch with a sender.",
    tags: [
      "React",
      "Nextjs",
      "AntDesign",
      "TypeScript",
      "Tailwind",
      "Internalization",
      "AntDesign",
      "Expo",
      "MongoDB",
      "Socket.io",
      "Node.js",
      "Express",
      "Redux",
      "Redux Toolkit",
      "Cloudinary",
      "Chart.js",
      "Axios",
      "Formik",
      "Yup",
    ],
    imageUrls: [
      zeyhiiweb1,
      zeyhiiweb2,
      zeyhiiweb3,
      zeyhiiweb4,
      zeyhiiweb5,
      zeyhiiweb6,
      zeyhiiweb7,
      zeyhiiweb8,
    ],
    link: "https://zeyhiiwebapp.vercel.app/en",
    figma:
      "https://www.figma.com/design/20KmbRAOlOKgqAVcRxWFl5/Zeyhii?node-id=899-1255&node-type=frame&t=VmLBD1EgayO1hxdr-0",
    instructionsDAcces:
      " The dashboard is available in English and French. The auth is not required. Click on Dashboard or Partners to access the admin panel.",
    github: "private",
  },
  {
    title: "GoGive Time",
    description:
      "A public web application for volunteering in Ghana. It connects organizations and volunteers. Organizations can create an organizer account, then create events that volunteers can apply to. It includes features such as filtering, nested forms, pagination, tables, and authentication.",
    tags: [
      "React",
      "Next.js",
      "AntDesign",
      "TypeScript",
      "Tailwind",
      "React hooks",
      "Redux",
      "Redux Toolkit",
    ],
    imageUrls: [
      gogivetime1,
      gogivetime2,
      gogivetime3,
      gogivetime4,
      gogivetime5,
    ],
    link: "https://gogivetime.org/",
    instructionsDAcces:
      "Create an account to explore all features. Use 'volunteer@example.com' for a demo volunteer account.",
    github: "private",
  },
  {
    title: "ThinkLike AI - E-learning platform",
    description:
      "ThinkLikeAi is an online learning platform that provides access to high-quality AI courses. It offers a wide range of courses in various categories, including AI, programming, data science, and more. Users can explore courses, pay with Stripe, enroll, and access learning materials at their convenience. Additionally, they can take a quiz at the end of each section to test their acquired knowledge.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Internalization",
      "MongoDB",
      "Node.js",
      "Stripe",
      "Socket.io",
      "Google Auth",
      "Github Auth",
      "Email Notification",
      "Dark Mode",
    ],
    imageUrls: [
      lms1,
      lms2,
      lms3,
      lms4,
      lms5,
      lms6,
      lms7,
      lms8,
      lms9,
      lms10,
      lms11,
      lms12,
      lms13,
      lms14,
      lms15,
      lms16,
      lms17,
    ],
    link: "https://thinklikeai-wedevnow.vercel.app/",
    github: "private",
    instructionsDAcces:
      "You can login as admin: email: gmespace.74@gmail.com; password: 12345678. For payment use test card: 4242 4242 4242 4242, any expiry date in the future, a random CVV and a random 3 digit CVC.",
  },
  {
    title: "EVLI- SMS",
    description:
      "This is a  management system used locally by EAGLE VISION LANGUAGE INSTITUTE, a language school in Accra. Used for accounting and student enrollment.",
    tags: ["React", "SQL", "Tailwind", "MySQL", "Node.js", "Sequelize"],
    imageUrls: [evli1],
    link: "#",
    github: "https://github.com/Miche-Mario/app-evli",
    instructionsDAcces:
      "You can clone the repository and run it on your local machine. The system is built with React for the front-end and Node.js with Express for the back-end. It uses MySQL as the database and Sequelize as the ORM.",
  },
  {
    title: "Ubiznews",
    description:
      "A public news app. A WordPress project linked to Dailymotion API.",
    tags: ["WordPress", "Dailymotion API", "PHP", "SQL", "MySQL"],
    imageUrls: [ubiznews1, ubiznews2, ubiznews3],
    link: "https://ubiznewstv.com/",
    github: "private",
    instructionsDAcces:
      "No specific instructions. Just explore and enjoy the news.",
  },
  {
    title: "Bombaa Marketplace",
    description:
      "Bombaa is a marketplace for buying and selling products. It is a public web application. It is a  project for a client who is a fashion designer. The application allows the client to showcase their products, receive orders, and manage their inventory.",
    tags: [
      "React",
      "Expo Router",
      "Expo",
      "React Native",
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Node.js",
      "Express",
      "Redux",
      "Redux Toolkit",
      "Cloudinary",
      "Axios",
      "Formik",
      "Yup",
    ],
    imageUrls: [
      bombaa0,
      bombaa01,
      bombaa1,
      bombaa2,
      bombaa3,
      bombaa4,
      bombaa5,
      bombaa6,
      bombaa7,
    ],
    github: "https://github.com/Miche-Mario/vitrine-bombaa",
    link: "https://bombaa.vercel.app/",
    instructionsDAcces:
      "No specific instructions. Just explore and enjoy the landing page. Unfortunatly the mobile app source code is not public.",
  },
  {
    title: "My Portfolio",
    description:
      "I worked on this project during my first Next.js course. A very exciting project. It has features like contact form, react email and dark mode.",
    tags: ["Next.js", "Resend", "TypeScript", "Tailwind", "Framer"],
    imageUrls: [portfolio1, portfolio2],
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
