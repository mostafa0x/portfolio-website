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
      <p className="mb-3">
        Hi, I'm Mostafa Ahmed, a passionate Front-End and Mobile Developer with
        a strong interest in building responsive, user-friendly applications.
        Programming has never been just a job or a hobby for me—it’s a true
        passion that started with game development and has grown into creating
        web and mobile apps using{" "}
        <span className="font-medium">
          React, Next.js, React Native, and TailwindCSS
        </span>
        , while also handling back-end development with Express and MongoDB. I
        enjoy designing seamless user experiences, integrating APIs, and
        optimizing performance to deliver high-quality, production-ready
        applications.
      </p>
    </motion.section>
  );
}
