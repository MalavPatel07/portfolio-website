import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import webappImg from "@/public/gcp-logo.png";
import getToGatherImg from "@/public/get-to-gather.png";
import currencyConverterImg from "@/public/currency-converter.png";
import JQ from "@/public/JQ.png";
import board from "@/public/board.png";
import kidimakodoImg from "@/public/kidi-makodo.webp";
import online from "@/public/online.png";

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

export const experiencesData = [
  {
    title: "Northeastern University",
    location: "Boston, MA, USA",
    description:
      "Worked as Teaching Assistant for Program Design Paradigm course for 4 semesters.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep. 23 - April 24",
  },
  {
    title: "Nok Nok Labs",
    location: "San Jose, CA, USA",
    description:
      "Worked as Software Engineering Intern at Nok Nok Labs where I developed a new feature for the Nok Nok S3 Authentication Suite.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan. 23 - Aug. 23",

  },
  {
    title: "Northeastern University",
    location: "Boston, MA, USA",
    description:
      "Worked as Teaching Assistant for Program Design Paradigm course for 4 semesters.",
    icon: React.createElement(LuGraduationCap),
    date: "May 22 - Dec. 22",
  },
  {
    title: "ElysIot",
    location: "San Jose, CA, USA",
    description:
      "Worked as a Software Engineer Intern at ElysIOT.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 21 - Dec. 21",
  },
  {
    title: "eClinicalWorks",
    location: "Ahmedabad, Guj, India",
    description:
      "Worked as Data Analyst Intern at eClinicalWorks",
    icon: React.createElement(CgWorkAlt),
    date: "March. 21 - May. 21",
  }
] as const;

export const projectsData = [
  {
    title: "Car Rental System",
    description:
      "Tranforming car rentals with a seamlessly integrated Microsoft SQL Server backend and Tkinter-powered frontend, offering dynamic search, filtering, and personalized user experiences.",
    tags: ["Python", "Tkinter", "MySQL Server", "CRUD operations"],
    imageUrl: webappImg,
    linkUrl: "https://github.com/MalavPatel07/Car-Rental-System",
  },
  {
    title: "Gym Management System",
    description:
      "Empowering fitness management with MERNG stack solution to offer personalized diet suggestions and personnel management.",
    tags: ["React","MongoDB", "Express", "Node.js", "GraphQL","Bootstrap"],
    imageUrl: getToGatherImg,
    linkUrl: "https://github.com/MalavPatel07/gym-web-app",
  },
  {
    title: "Adventure Board Game",
    description:
      "Adventure Board Game 'Kill Dr. Lucky' featuring MVC architecture, interactive GUI, and robust test-driven development for enhanced gameplay and 98% code coverage.",
    tags: ["Java Swing", "MVC", "Design Patterns", "Maven"],
    imageUrl: board,
    linkUrl: "https://drive.google.com/file/d/1AskqHwRV-ydXsYbq7oKv1fgiHQ3VLEx3/view",
  },
  {
    title: "Online Examination System",
    description:
      "Online Examination System built on the MERN stack, offering diverse question types, user authentication, and real-time quiz interactions for seamless scalability and engagement.",
    tags: ["React","MongoDB", "Express", "Node.js", "REST APIs","Bootstrap", "Socket.io","JSON Web Tokens"],
    imageUrl: online,
    linkUrl:"",
  },
  {
    title: "Job Quest",
    description:
      "Launched a Chrome extension empowering job seekers to effortlessly track their applied positions, streamlining the job search process.",
    tags: ["JavaScript","HTML", "CSS", "Chrome Extension"],
    imageUrl: JQ,
    linkUrl: "https://chromewebstore.google.com/detail/job-quest/kcbegomniocdkdeefakmkhabkbcidhlf",
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "AWS",
  "spring",
  "node",
  "Flutter",
  "Docker",
  "Linux",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "ElasticSearch",
  "Kibana",
  "MySQL",
  "GraphQL",
  "ApacheKafka"
] as const;
