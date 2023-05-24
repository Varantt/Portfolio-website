import React from "react";
import projects from "../data.js";
import ProjectItem from "./ProjectItem.jsx";
import useScroll from "../hooks/useScroll.js";

export default function Projects() {
    const isVisible = useScroll("#portfolio");

  return (
    <section>
      <div className="text-center  text-xl md:text-4xl pt-2 md:pt-24 text-darkViolet  ">
        My Projects
      </div>
      <div id = "portfolio" className="flex flex-col md:flex-row items-center justify-center p-10  fade-animation-3">
        <div className="grid grid-cols-1   gap-9 text-white  ">
          {projects.map((project, index) => {
            return <ProjectItem key={index} isVisible={isVisible}  {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}
