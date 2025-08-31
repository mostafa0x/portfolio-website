import Project from "@/components/project";
import { projectsData } from "@/lib/data";
import { Link } from "@react-email/components";
import React from "react";

export default function AllProjects() {
  return (
    <div className=" justify-items-center px-6 mb-32">
      <h1 className="text-3xl mb-16">All Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
