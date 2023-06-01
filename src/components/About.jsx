import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import laptop from "/assets/laptop.jpg";
// import code from '../assets/code.png'
import useScroll from "../hooks/useScroll";

export default function About() {
  let isVisible = useScroll("#about");

  return (
    <section
      id="about"
      className={` md:mt-32`}
    >
      <div className="container  flex flex-col  lg:flex-row  items-center mb-16 md:mb-32  overflow-x-hidden">
        {/* item-1 */}
        <div
          className={` md:w-1/2 flex justify-center ${
            isVisible ? "rotate-opacity-2 opacity-0" : ""
          }   `} 
        >
          <img
            src={laptop}
            alt=""
            className=" h-[450px] rounded-2xl box-shadow"
          />
        </div>

        {/* item 2 */}

        <div className={`flex  flex-col space-y-3  md:w-1/2 p-4 md:mt-72 items-center md:items-start  ${
            isVisible ? "slide-up-2 " : ""
          }   `}>
          <span className="text-2xl border-b-2 border-white text-center text-white w-16 rounded-xl p-1">
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
            
          </div>

          <div className="text-base box-border text-offWhite "></div>
        </div>
      </div>
    </section>
  );
}
