import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import laptop from "../../public/assets/laptop.jpg";
// import code from '../assets/code.png'
import useScroll from "../hooks/useScroll";

export default function About() {
  let isVisible = useScroll("#about");

  return (
    <section
      id="about"
      className={`portfolio-section ${isVisible ? "in-view " : ""} mt-36`}
    >
      <div className="container  flex flex-col  lg:flex-row  items-center mb-16 md:mb-32  overflow-x-hidden">
        {/* item-1 */}
        <div className="md:w-1/2 flex justify-center  ">
          <img src={laptop} alt="" className="p-5 h-[450px] rounded-3xl" />
        </div>

        {/* item 2 */}

        <div className="flex  flex-col space-y-3  md:w-1/2 p-4 md:mt-52 items-center md:items-start">
          <span className="text-xl border-b-2 border-white text-center text-darkViolet w-16 rounded-xl p-1">
            I
          </span>

          <div className="text-3xl md:text-5xl text-darkViolet drop-shadow-2xl   ">
            About me
          </div>

          <div className="text-sm md:text-lg  text-white p-5 md:p-0">
            <p>
              Hi there! This is Varant. <br /> <br /> I’m a Self-motivated and
              an enthusiastic developer, dedicated to broadening my horizon on a
              daily. I am a fresh Lebanese University graduate, who’s passionate
              and eager to add on my professional coding knowledge! <br />{" "}
              Currently, i am a Front-end Web developer, specialized in React,
              and a Wordpress Developer/Freelancer. Nevertheless, I’m interested
              in anything Web related. <br /> I have a decent background in
              creating Wordpress Websites, updating outdated ones, and
              maintaining the excellence of websites.
            </p>
            <p>
              {" "}
              I like to be challenged. Tough situations are opportunities for me
              to put all of my skills into practice and learn new ones to
              resolve the problem. I take the latter as a fun learning journey!
            </p>
            <button className="p-2 bg-white hover:bg-transparent text-darkViolet hover:text-white font-semibold transition-all duration-150 rounded shadow-2xl border-white mt-5 border-2">
              <Link to = "/about">Learn more</Link>
            </button>
          </div>

          <div className="text-base box-border text-offWhite "></div>
        </div>
      </div>
    </section>
  );
}
