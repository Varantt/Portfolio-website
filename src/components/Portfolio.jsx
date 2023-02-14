import React from "react";
import projects from "../data.js";
import ProjectItem from "./ProjectItem.jsx";
import useScroll from "../hooks/useScroll.js";

export default function Portfolio() {
  const isVisible = useScroll("#portfolio");

  return (
    <section
      id="portfolio"
      className={`portfolio-section ${isVisible ? "in-view" : ""}`}
    >
      <div className="flex flex-row justify-center mt-16 md:mt-44 mb-7">
        <span className="flex flex-row  text-xl border-b-2 border-white justify-center text-darkViolet w-16 rounded-xl p-1">
          II
        </span>
      </div>
      <div className="text-center  text-xl md:text-3xl text-darkViolet ">
        My Projects
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-10  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  text-white  ">
          {projects.map((project, index) => {
            return <ProjectItem key={index} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}
