import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineBook,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="flex flex-col space-y-4 p-6 md:flex-row  text-white justify-between border-t-2 border-black bg-black  ">
      <div className="flex flex-col  items-center md:items-start  md:pl-10 space-y-2 w-full md:w-1/3  ">
        <div className="flex flex-row space-x-2 ">
          <AiOutlineHome size={20} />
          <HashLink to="/#home" className="hover:pl-2  transition-all duration-300">
            Home
          </HashLink>
        </div>

        <div className="flex flex-row space-x-2">
          <AiOutlineProject size={20} />
          <HashLink
            to="/#portfolio"
            className="hover:pl-2 transition-all duration-300"
          >
            Projects
          </HashLink>
        </div>

        <div className="flex flex-row space-x-2">
          <AiOutlineBook size={20} />
          <HashLink to="/#about" className="hover:pl-2 transition-all duration-300">
            About
          </HashLink>
        </div>
      </div>

      <div className="flex flex-row  space-x-6 justify-center md:space-x-6  text-gray-700 bg-black h-12 shadow items-center p-4  rounded-full footer-item w-auto">
        <Link
          to="https://github.com/Varantt"
          target="_blank"
          className="cursor-pointer"
        >
          <AiOutlineGithub size={25} />
        </Link>
        <Link
          to="https://twitter.com/Varant_k "
          target="_blank"
          className="cursor-pointer"
        >
          <AiOutlineTwitter size={25} />
        </Link>
      </div>

      <div className="flex  justify-center items-center md:w-1/3">
        &copy;2023 Varant Kalemkerian
      </div>
    </div>
  );
}
