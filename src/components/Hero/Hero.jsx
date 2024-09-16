import { React } from "react";
import varant from "/assets/thumbnail.png";
import cv from "/assets/CV-Varant-Kalemkerian-Software-Developer.pdf";
import "./hero.css";

export default function Hero() {
  return (
    <section id="hero" className="flex align-center h-[100svh]">
      {/* flex container */}
      <div className=" container mx-auto   flex flex-col-reverse items-center justify-center   space-y-3 md:space-y-0 md:flex-row      ">
        {/* item 1 */}

        <div className="flex flex-col md:w-1/2    md:space-y-4  md:items-start">
          <h1 className=" text-white text-3xl text-center md:text-left mt-9 opacity-0   skew-animation md:text-6xl md:mb-0 md:mt-0 ">
            Varant Kalemkerian
          </h1>
          <div className="job-description text-center font-normal md:text-justify  text-lg fade-left animation-delay-500 opacity-0 md:text-3xl md:mt-0 ">
            Software Engineer
          </div>

          <div className="flex flex-row justify-center md:block">
            <div className="btn text-center md:text-base m-2 md:m-0 px-0 bg-transparent cursor-pointer rotate-opacity opacity-0  font-bold   duration-150 text-offWhite py-2 md:px-4 bg-lightBlue rounded-lg hover:bg-opacity-70 w-32 md:w-max ">
              <a href={cv} download="CV-Varant-Kalemkerian-Software-Developer">
                Download CV
              </a>
            </div>
          </div>

          {/* <div className=" flex justify-center md:justify-start slide-down  opacity-0 items-center space-x-2 md:space-x-3 text-white md:pr-4  ">
            <Link
              to="https://github.com/Varantt"
              target="_blank"
              className=" cursor-pointer hover:text-offWhite  transition-all duration-200"
            >
              <AiOutlineGithub size={25} />
            </Link>
            <Link
              to="https://twitter.com/Varant_K"
              target="_blank"
              className=" cursor-pointer hover:text-offWhite   transition-all duration-200"
            >
              <AiOutlineTwitter size={25} />
            </Link>
          </div> */}
        </div>
        {/* item 2 */}
        <div className="flex  md:w-1/2  items-start justify-end w-2/3 opacity-0 slide-down">
          <img
            className="img border-4 border-lightBlue border-solid"
            src={varant}
            alt="yelow"
            width="360"
            height="270"
          />
        </div>
      </div>
    </section>
  );
}
