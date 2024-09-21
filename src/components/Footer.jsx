import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { ContentWrapper } from "./contentWrapper/ContentWrapper";

export default function Footer() {
  const email = "varantkalemkerian@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`;

  return (
    <div
      id="footer"
      className="flex flex-col space-y-4 md:p-6 mt-6   text-blackRaisin dark:text-offWhite justify-between bg-offWhite dark:bg-blackRaisin   "
    >
      <ContentWrapper>
        <div className="footer-container  gap-8 md:gap-0 flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col gap-4   md:items-start  w-full md:w-1/3  ">
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

          <div className="flex flex-col gap-4 space-x-6 justify-center md:space-x-6    rounded-full footer-item w-auto">
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
              <Link
                to={gmailComposeUrl}
                target="_blank"
                className="cursor-pointer social-link"
              >
                <AiOutlineMail size={25} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex  justify-start md:justify-end overflow-x-hidden 2xl:max-w-[1500px] xl:max-w-[1230px] md:max-w-none md:py-8  pt-4 m-auto w-full  items-center">
          &copy;2024 Varant Kalemkerian
        </div>
      </ContentWrapper>
    </div>
  );
}
