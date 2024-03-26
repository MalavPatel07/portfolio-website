import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import webappImg from "@/public/gcp-logo.png";
import getToGatherImg from "@/public/get-to-gather.png";
import currencyConverterImg from "@/public/currency-converter.png";
import ffgImg from "@/public/ffg.png";
import kidimakodoImg from "@/public/kidi-makodo.webp";

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
    title: "ElysIOT",
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
      "A Tkinter application with MySQL database and implemented CRUD operations using Python and MySQL Connector.",
    tags: ["Python", "Tkinter", "MySQL Server", "CRUD operations"],
    imageUrl: webappImg,
  },
  {
    title: "Gym Management System",
    description:
      "A MERN stack application with REST APIs for gym management system.",
    tags: ["React","MongoDB", "Express", "Node.js", "GraphQL","Bootstrap"],
    imageUrl: getToGatherImg,
  },
  {
    title: "Adventure Board Game",
    description:
      "A Java Swing application with MVC architecture and implemented design patterns like Observer, Singleton, Factory, etc.",
    tags: ["Java Swing", "MVC", "Design Patterns", "Maven"],
    imageUrl: currencyConverterImg,
  },
  {
    title: "Online Examination System",
    description:
      "A MERN stack application with REST APIs for online examination system.",
    tags: ["React","MongoDB", "Express", "Node.js", "REST APIs","Bootstrap", "Socket.io","JSON Web Tokens"],
    imageUrl: ffgImg,
  }
] as const;

export const skillsData = [
  "Java",
  "Python",
  "AWS",
  "Spring Boot",
  "Node.js",
  "Maven",
  "Flutter",
  "Docker",
  "Linux",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "ElasticSearch",
  "Kibana",
  "MySQL",
  "GraphQL",
  "Apache Kafka"
] as const;
