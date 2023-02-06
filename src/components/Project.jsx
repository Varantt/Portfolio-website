import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";

export default function Project() {
  const [value, setValue] = useState({
    name: "",
    desc: "",
    link: "",
    stack: [],
  });
  const [projects, setProjects] = useState(data);
  console.log(projects);
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    const newProject = projects.find((project) => project.title === name);
    console.log(newProject);
    setValue({
      ...value,
      name: newProject.title,
      desc: newProject.description,
      link: newProject.link,
      stack: newProject.stack,
    });
    console.log(value);
  }, []);

  console.log(value.desc);

  return (
    <React.Fragment>
      <div className="text-2xl md:text-4xl text-white text-center mt-10 md:mt-20 ">
        {value.name}
      </div>
      <div className="flex flex-col md:flex-row text-white mt-10 md:mt-20 p-10">
        <div className="md:w-1/3 ">
          Stack used :
          {value.stack.map((each) => {
            return ` ${each}`;
          })}
        </div>
        <div className="md:w-2/3 border-l-2 p-3 border-darkViolet flex flex-col  ">
          {value.desc}
          <Link to={value.link} target="_blank">
            <button className="p-2 rounded mt-3 border-2 border-darkViolet hover:bg-darkViolet hover:text-white transition-colors duration-300">
              Visit website
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
