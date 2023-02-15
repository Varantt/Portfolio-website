import React from "react";
import projects from "../data.js";
import ProjectItem from "./ProjectItem.jsx";

export default function Projects() {
  return (
    <section>
      <div className="text-center  text-xl md:text-4xl pt-2 md:pt-24 text-darkViolet ">
        My Projects
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-10  fade-animation-3">
        <div className="grid grid-cols-1   gap-9 text-white  ">
          {projects.map((project, index) => {
            return <ProjectItem key={index} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}
