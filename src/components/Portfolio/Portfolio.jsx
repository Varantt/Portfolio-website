import React from "react";
import projects from "../../data/projects-data.js";
import ProjectItem from "../ProjectItem/ProjectItem.jsx";
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className={`portfolio-section  w-full mt-16 md:mt-32`}
    >
      <div className="container 2xl:max-w-[1500px] xl:max-w-[1230px] md:max-w-none md:p-8  p-4 sm:p-4 m-auto w-full">
        <div id="projects-header" className="mb-7 ">
          <p className="mb-2 text-blackRaisin dark:text-offWhite text-opacity-60 text-sm md:text-md">
            Portfolio
          </p>
          <h1 className="mb-10 text-blackRaisin dark:text-offWhite text-4xl md:text-5xl">
            Projects
          </h1>
        </div>

        <div
          id="projects-wrapper"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => {
            return (
              <ProjectItem {...project} key={project.id} id={project.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
