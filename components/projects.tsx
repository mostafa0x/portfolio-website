"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { theme } = useTheme();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <Link href={"/AllProjects"}>
          <h1 className=" text-right pr-3 cursor-pointer text-gray-500 text-lg hover:text-gray-300 ">
            Show More...
          </h1>
        </Link>
      </div>
    </section>
  );
}
