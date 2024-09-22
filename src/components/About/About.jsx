import React, { useRef, useState, useEffect } from "react";
import useScroll from "../../hooks/useScroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import "./about.css";
import { ContentWrapper } from "../contentWrapper/ContentWrapper";

export default function About() {
  const socialRef = useRef(null);
  const aboutMeRef = useRef(null);
  const companyRef = useRef(null);
  const universityRef = useRef(null);
  const freelanceRef = useRef(null);
  const servicesRef = useRef(null);

  const [animatedSocial, setAnimatedSocial] = useState(false);
  const [animatedAboutMe, setAnimatedAboutMe] = useState(false);
  const [animatedCompany, setAnimatedCompany] = useState(false);
  const [animatedUniversity, setAnimatedUniversity] = useState(false);
  const [animatedFreelance, setAnimatedFreelance] = useState(false);
  const [animatedServices, setAnimatedServices] = useState(false);

  let isVisibleSocialRef = useScroll(socialRef);
  let isVisibleAboutMeRef = useScroll(aboutMeRef);
  let isVisibleCompanyRef = useScroll(companyRef);
  let isVisibleUniversityRef = useScroll(universityRef);
  let isVisibleFreelanceRef = useScroll(freelanceRef);
  let isVisibleServicesRef = useScroll(servicesRef);

  useEffect(() => {
    if (isVisibleSocialRef && !animatedSocial) setAnimatedSocial(true);
  }, [isVisibleSocialRef, animatedSocial]);

  useEffect(() => {
    if (isVisibleAboutMeRef && !animatedAboutMe) setAnimatedAboutMe(true);
  }, [isVisibleAboutMeRef, animatedAboutMe]);

  useEffect(() => {
    if (isVisibleCompanyRef && !animatedCompany) setAnimatedCompany(true);
  }, [isVisibleCompanyRef, animatedCompany]);

  useEffect(() => {
    if (isVisibleUniversityRef && !animatedUniversity)
      setAnimatedUniversity(true);
  }, [isVisibleUniversityRef, animatedUniversity]);

  useEffect(() => {
    if (isVisibleFreelanceRef && !animatedFreelance) setAnimatedFreelance(true);
  }, [isVisibleFreelanceRef, animatedFreelance]);

  useEffect(() => {
    if (isVisibleServicesRef && !animatedServices) setAnimatedServices(true);
  }, [isVisibleServicesRef, animatedServices]);
  return (
    <section id="about" className="mt-16 md:mt-32 relative">
      <ContentWrapper>
        <p className="mb-2 text-blackRaisin dark:text-offWhite text-opacity-60 text-sm  md:text-md">
          Introduction
        </p>
        <h1 className="mb-10 text-blackRaisin dark:text-offWhite text-4xl md:text-5xl">Overview</h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2  gap-4">
          {/* Grid item spanning two rows */}
          <div
            ref={socialRef}
            className={`social shadow-custom dark:shadow-custom-dark dark:border bg-white dark:bg-black dark:bg-opacity-20 dark:border-solid dark:border-blackRaisin flex flex-col flex-1 gap-2 items-center justify-center  bento-box rounded-md  row-span-1   p-8 text-blackRaisin dark:text-offWhite ${
              animatedSocial ? "active" : ""
            } `}
          >
            <span className="text-lightBlue font-bold text-2xl">
              {" "}
              Social Info{" "}
            </span>

            <div className="flex flex-row flex-wrap md:w-40 lg:w-unset  md:align-center justify-center gap-2 ">
              <Link
                to="https://github.com/Varantt"
                target="_blank"
                className=" social-link cursor-pointer  text-black dark:bg-opacity-20 dark:text-white  transition-all duration-300 md:basis-16 flex justify-center flex-shrink-0 lg:basis-auto"
              >
                <AiOutlineGithub size={24} />
              </Link>
              <Link
                to="https://twitter.com/Varant_K"
                target="_blank"
                className=" social-link cursor-pointer text-black dark:bg-opacity-20 dark:text-white   transition-all duration-300 md:basis-16 flex justify-center align-center  flex-shrink-0 lg:basis-auto"
              >
                <AiOutlineTwitter size={24} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/varant-kalemkerian-b76b40200/"
                target="_blank"
                className=" social-link cursor-pointer text-black dark:bg-opacity-20 dark:text-white  transition-all duration-300 md:basis-16 flex justify-center flex-shrink-0 lg:basis-auto"
              >
                <AiOutlineLinkedin size={24} />
              </Link>

              <Link
                to="https://wa.me/96178947084"
                target="_blank"
                className=" social-link cursor-pointer  text-black dark:bg-opacity-20 dark:text-white transition-all duration-300 md:basis-16 flex justify-center flex-shrink-0 lg:basis-auto"
              >
                <AiOutlineWhatsApp size={24} />
              </Link>
            </div>
          </div>

          {/* Additional grid items */}
          <div
            ref={aboutMeRef}
            className={`about-me flex flex-col flex-1 gap-3 items-start justify-center bento-box rounded-md lg:col-span-2 sm:col-span-1 lg:row-span-1 sm:row-span-2 shadow-custom dark:shadow-custom-dark dark:border bg-white dark:bg-black dark:bg-opacity-20 dark:border-solid dark:border-blackRaisin p-8 text-center text-blackRaisin dark:text-offWhite ${
              animatedAboutMe ? "active" : ""
            }`}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faAddressCard} className="text-3xl" />
            </div>
            <span className="font-bold text-2xl text-lightBlue text-left inline-block w-full">
              About Me
            </span>
            <p className="font-normal text-left description text-sm">
              I'm a 22&nbsp;year old developer with a commitment to expanding my
              horizons daily. At present, I specialize in front-end web
              development, with a particular focus on{" "}
              <span className="font-bold  text-lightBlue ">React </span>.
              Additionally, I have expertise in{" "}
              <span className="font-bold text-lightBlue">WordPress</span>&nbsp;
              development , further diversifying my skill set in the dynamic
              field of web development.
            </p>
          </div>
          <div
            ref={companyRef}
            className={`company bento-box current-company min-h-[50svh] md:min-h-fit lg:h-auto sm:row-span-2 lg:row-span-1 rounded-md p-4 text-offWhite  ${
              animatedCompany ? "active" : ""
            }`}
          >
            <span className="absolute top-0 left-0 px-5 py-4">
              Current Company
            </span>
          </div>

          <div
            ref={universityRef}
            className={`${
              animatedUniversity ? "active" : ""
            } bento-box university shadow-custom dark:shadow-custom-dark dark:border bg-white dark:bg-black dark:bg-opacity-20 dark:border-solid dark:border-blackRaisin rounded-md p-8 text-white sm:row-span-3 lg:row-span-1 min-h-[50svh] md:min-h-fit `}
          >
            <span className="absolute bottom-0 left-0 px-5 py-4">
              University
            </span>
          </div>

          {/* Freelance */}
          <div
            ref={freelanceRef}
            className={`${
              animatedFreelance ? "active" : ""
            } freelance flex  flex-col flex-1 gap-2 items-center justify-center bento-box  sm:order-2 lg:-order-none lg:row-span-1 rounded-md col-span-1   p-4 text-white shadow-custom dark:shadow-custom-dark dark:border bg-white dark:bg-black dark:bg-opacity-20 dark:border-solid dark:border-blackRaisin`}
          >
            <span className="font-bold text-3xl md:text-4xl text-lightBlue text-center inline-block w-full">
              Freelancer
            </span>
            <p className="text-blackRaisin dark:text-offWhite">
              {" "}
              <span className="text-lightBlue font-bold">4</span> years of
              experience
            </p>
            <p className="text-xs font-normal text-blackRaisin dark:text-offWhite text-opacity-60">
              Web / Mobile apps
            </p>
          </div>

          {/* Services */}
          <div
            ref={servicesRef}
            className={`${
              animatedServices ? "active" : ""
            } services flex flex-col flex-1 gap-3 items-start bg-white dark:bg-black dark:bg-opacity-20 justify-center bento-box rounded-md lg:col-span-2 sm:col-span-1 sm:row-span-3 lg:row-span-1 shadow-custom dark:shadow-custom-dark dark:border dark:border-solid dark:border-blackRaisin p-8 text-center `}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faUserMd} className="text-3xl text-blackRaisin dark:text-offWhite" />
            </div>
            <span className="font-bold text-2xl text-lightBlue text-left inline-block w-full">
              My Services
            </span>
            <p className="font-normal text-black dark:bg-opacity-20 dark:text-offWhite text-left text-sm">
              From dynamic e-commerce systems to seamless user interfaces,
              I&nbsp;
              <span className="text-lightBlue font-bold">specialize</span> in
              developing fast, responsive, and scalable solutions that
              streamline your operations and deliver a flawless user experience.
            </p>
            <p className="text-xs text-left font-normal text-blackRaisin dark:text-offWhite  text-opacity-60">
              Let's transform your ideas into reality and give your users an
              unforgettable digital experience!
            </p>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}
