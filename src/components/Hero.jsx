import { React } from "react";
import varant from "../../public/assets/varant.png";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import cv from "../../public/assets/CV-2.pdf";

export default function Hero() {
  return (
    <section id="hero">
      {/* flex container */}
      <div className=" container mx-auto md:pl-16 md:pt-5 flex flex-col-reverse items-center mt-4 md:mt-28  md:space-y-4 md:flex-row      ">
        {/* item 1 */}

        <div className="flex flex-col md:w-1/2    md:space-y-4  md:items-start">
          <h1 className=" text-offWhite text-3xl  mt-9   fade-left md:text-6xl md:mb-0 md:mt-0 ">
            Varant Kalemkerian
          </h1>
          <div className=" text-center md:text-justify  text-xl text-darkViolet fade-animation md:text-3xl md:mt-0 ">
            Junior Web Developer
          </div>

          <div className="flex flex-row justify-center md:block">
            <div className="text-center md:text-base m-2 md:m-0 px-0 bg-white cursor-pointer fade-animation-3 hover:bg-transparent font-semibold  hover:text-white transition-all duration-150 text-darkViolet py-2 md:px-4 border border-gray-400 rounded shadow-black shadow w-32 md:w-max ">
              <a href={cv} download="CV-Varant">
                Download CV
              </a>
            </div>
          </div>

          <div className=" flex justify-center fade-animation md:justify-start items-center space-x-2 md:space-x-3 text-white md:pr-4  ">
            <Link
              to="https://github.com/Varantt"
              target="_blank"
              className=" cursor-pointer hover:text-darkViolet transition-all duration-200"
            >
              <AiOutlineGithub size={25} />
            </Link>
            <Link
              to="https://twitter.com/Varant_K"
              target="_blank"
              className=" cursor-pointer hover:text-darkViolet transition-all duration-200"
            >
              <AiOutlineTwitter size={25} />
            </Link>
          </div>
        </div>
        {/* item 2 */}
        <div className="flex  md:w-1/3  items-center justify-center rounded-3xl box-shadow md:ml-16 border-t-2  fade-animation ">
          <img src={varant} alt="yelow" width="250" height="100" />
        </div>
      </div>
    </section>
  );
}
