import React from "react";
import { LuCode2, LuGamepad2, LuLaptop } from "react-icons/lu";
import beetifyImg from "@/public/beatify.jpg";
import anmieWorld from "@/public/anmeWorld.jpg";
import octane from "@/public/octane.jpg";

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
    title: "Started focusing on Game Development",
    location: "Remote",
    description:
      "Began exploring game development using Construct 2, creating custom behaviors, animations, and interactive mechanics to build engaging 2D games.",
    icon: React.createElement(LuGamepad2),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "Worked as a Front-End Developer focusing on building scalable web apps using React, Next.js, and Tailwind CSS. Gained strong experience in creating responsive, modern UIs and optimizing performance.",
    icon: React.createElement(LuCode2),
    date: "2024 - 2025",
  },
  {
    title: "Front-End & Mobile Developer",
    location: "Remote",
    description:
      "Currently working as a Front-End Web and Mobile Developer, building production-ready apps with React, Next.js, Tailwind CSS, and React Native. Also gained hands-on experience with back-end development, APIs, and database integrations.",
    icon: React.createElement(LuLaptop),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Beatify",
    description:
      "Beatify is a modern music discovery app that lets you discover, search, and play your favorite songs",
    tags: [
      "Mobile App",
      "React Native",
      "Expo",
      "TypeScript",
      "React Query",
      "Style Sheet",
      "Redux",
    ],
    imageUrl: beetifyImg,
    link: "https://github.com/mostafa0x/Beatify-MobileApp",
  },
  {
    title: "Anime World",
    description:
      "Anime World is your gateway to the anime universe!Browse, search, and explore your favorite anime series, characters, and trailers ",
    tags: [
      "Mobile App",
      "React Native ",
      "TypeScript",
      "Expo",
      "React Query",
      "Redux",
    ],
    imageUrl: anmieWorld,
    link: "https://github.com/mostafa0x/Anmie-Wolrd-MobileApp",
  },
  {
    title: "Octane",
    description:
      " mobile app that allows employees to upload their NFC line deliveries quickly and easily, with a connected dashboard to track, review",
    tags: [
      "Mobile App",
      "React Native ",
      "TypeScript",
      "Expo",
      "React Query",
      "Redux",
    ],
    imageUrl: octane,
    link: "https://github.com/mostafa0x/Octane",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "React Query",
  "Expo",
  "Next.js",
  "Node.js",
  "Git",
  "Git hub",
  "Tailwind",
  "Style Sheet React Native",
  "Redux Toolkit",
  "Express",
  "MongoDB",
  "Responsive Dimensions for Mobile",
  "Responsive Web design",
] as const;
