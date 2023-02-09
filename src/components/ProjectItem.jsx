import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem({ title, imgUrl, stack }) {
  return (
    <div className="projects rounded-md hover:text-black transition-colors ">
      <img
        src={imgUrl}
        alt="portfolio"
        className=" h-36 md:h-48 object-cover w-full cursor-pointer  rounded-md "
      />
      <div className="p-8 w-auto">
        <h3 className="text-lg md:text-xl title">{title}</h3>
        <p className=" mt-2 flex flex-row space-x-3 text-sm md:text-md text-white rounded stack bg-darkViolet w-auto  shadow p-2 font-bold  ">
          {stack.map((language, index) => {
            return <span key={index}>{language}</span>;
          })}
        </p>
        <Link
          to={`/project/${title}`}
          className="text-xs md:text-sm text-offWhite link "
        >
          <button className="p-2 rounded mt-3 border-2 border-darkViolet hover:bg-darkViolet hover:text-white transition-colors duration-300">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
}
