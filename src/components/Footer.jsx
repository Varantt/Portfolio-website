import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div
      id="footer"
      className="flex flex-col space-y-4 p-6 mt-6   text-white justify-between border-t-2 border-black bg-black   "
    >
      <div className="footer-container overflow-x-hidden 2xl:max-w-[1500px] xl:max-w-[1230px] md:max-w-none md:p-8  p-4 sm:p-4 m-auto w-full gap-8 md:gap-0 flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col gap-4   md:items-start  md:pl-10 w-full md:w-1/3  ">
          <div className="flex flex-row space-x-2 ">
            <div className="text-xl text-lightBlue font-bold">Navigate</div>
          </div>
          <div className="flex flex-row space-x-2 "></div>

          <div className="flex flex-row space-x-2">
            <HashLink
              to="/#about"
              className="hover:pl-2 transition-all duration-300"
            >
              About
            </HashLink>
          </div>
          <div className="flex flex-row space-x-2">
            <HashLink
              to="/#portfolio"
              className="hover:pl-2 transition-all duration-300"
            >
              Projects
            </HashLink>
          </div>

          <div className="flex flex-row space-x-2">
            <HashLink
              to="/#experience"
              className="hover:pl-2 transition-all duration-300"
            >
              Experience
            </HashLink>
          </div>

          <HashLink
            to="/#skills"
            className="hover:pl-2  transition-all duration-300"
          >
            Skills
          </HashLink>
        </div>

        <div className="flex flex-col gap-4 space-x-6 justify-center md:space-x-6  items-center   rounded-full footer-item w-auto">
          <div className="text-xl text-lightBlue font-bold">Contact</div>

          <div className="social-icons flex flex-row gap-4 ml-0">
            <Link
              to="https://www.linkedin.com/in/varant-kalemkerian-b76b40200/"
              target="_blank"
              className="cursor-pointer social-link"
            >
              <AiOutlineLinkedin size={25} />
            </Link>
            <Link
              to="https://wa.me/96178947084"
              target="_blank"
              className="cursor-pointer social-link"
            >
              <AiOutlineWhatsApp size={25} />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex  justify-start md:justify-end overflow-x-hidden 2xl:max-w-[1500px] xl:max-w-[1230px] md:max-w-none md:p-8  p-4 sm:p-4 m-auto w-full  items-center">
        &copy;2024 Varant Kalemkerian
      </div>
    </div>
  );
}
