import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Codepen from '/public/codepen.png'
import dasboard from '/public/dashboard.jpg'

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
    title: "Frontend Developer",
    location: "Infotrix, Remote",
    description: "After graduating, I worked as a frontend developer and built a fully functional eCommerce website with features like product listings, filtering, shopping cart, and responsive design using React and Tailwind CSS.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Software Developer",
    location: "Opinium.ai, FL",
    description:
      "I am working as a full-stack developer for Opinium.ai.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "DevCode",
    description:
      "DevCode is a web-based platform that allows users to practice and test their HTML, CSS, and JavaScript code in real time. It features user authentication and the ability to save projects using Firebase.",
    tags: ["React", "Next.js", "Firebase", "Tailwind"],
    imageUrl: Codepen,
  },
  {
    title: "Opinium.ai",
    description:
"Opinium.ai is a data intelligence platform where I worked as a full-stack developer.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "NodeJs","Redux"],
    imageUrl:dasboard
    ,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Git",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "Django",
  "Framer Motion",
] as const;
