import React from "react";
import { BsCheck2All } from "react-icons/bs";
export default function Skills() {
  return (
    <section id="skills">
      <div className="text-3xl md:text-4xl text-darkViolet text-center shadow-inner mb-3 md:mb-8 ">
        Skills
      </div>
      <div className="flex flex-col md:flex-row mb-4  justify-center items-center md:space-x-6 md:space-y-0 space-y-4 ">
        {/* item 1 */}
        <div className=" skill box-shadow md:w-1/3 p-10  text-darkViolet hover:bg-transparent  transition-colors duration-150  rounded-md font-bold  border-white  ">
          <div className="mb-2  skill-title text-white ">Languages: </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="flex">
              <BsCheck2All size={19} className="mr-2" />
              HTML
            </div>
            <div className="flex">
              <BsCheck2All size={19} className="mr-2" />
              CSS
            </div>
            <div className="flex">
              <BsCheck2All size={19} className="mr-2" />
              JavaScript
            </div>
            <div className="flex">
              <BsCheck2All size={19} className="mr-2" />
              Java
            </div>
            <div className="flex">
              <BsCheck2All size={19} className="mr-2" />
              C++
            </div>
          </div>
        </div>
        <div className=" skill box-shadow md:w-1/3 p-10  text-darkViolet hover:bg-transparent     rounded-md font-bold  border-white  transition-colors duration-150">
          <div className="mb-2  skill-title text-white ">Frameworks: </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="flex ">
              {" "}
              <BsCheck2All size={19} className="mr-2" />
              ReactJs
            </div>
            <div className="flex ">
              <BsCheck2All size={19} className="mr-2" />
              Bootstrap
            </div>
            <div className="flex ">
              <BsCheck2All  size = {19} className="mr-2" />
              TailwindCSS
            </div>
            <div className="flex ">
              <BsCheck2All size={19} className="mr-2" />
              jQuery
            </div>
            <div className="flex ">
              <BsCheck2All size={19} className="mr-2" />
              ExpressJs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
