import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data/projects-data";
import "./project.css";

export default function Project() {
  const [value, setValue] = useState({
    name: "",
    desc: "",
    link: "",
    stack: [],
  });
  const [projects, setProjects] = useState(data);
  const { name } = useParams();

  useEffect(() => {
    const newProject = projects.find((project) => project.title === name);
    setValue({
      ...value,
      name: newProject.title,
      desc: newProject.description,
      link: newProject.link,
      stack: newProject.stack,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="text-2xl md:text-4xl text-white text-center mt-10  ">
        {value.name}
      </div>
      <div
        id="project-info"
        className="flex flex-col md:flex-row  mt-10  p-10 px-0 "
      >
        <div className="md:w-1/3 text-center">
          Stack used :
          {value.stack.map((each) => {
            return ` ${each}`;
          })}
        </div>
        <div className="md:w-2/3 border-l-2 p-8 pt-0 border-offWhite flex flex-col  ">
          {value.desc}
          <Link to={value.link} target="_blank">
            <button className="p-2 rounded mt-3 border-2  hover:bg-offWhite hover:text-white transition-colors duration-300">
              Visit website
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
