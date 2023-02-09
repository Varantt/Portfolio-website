import React, { useEffect, useState } from "react";
import laptop from "../../photos/laptop.jpg";
import Skills from './Skills'
import useScroll from "../hooks/useScroll";

export default function About() {
  return (
    <section id="about" className="fade-animation-3">
      <div className="container  flex flex-col  lg:flex-row  items-center mb-16 md:mb-32 mt-32  overflow-x-hidden">
        {/* item-1 */}
        <div className="md:w-1/2 flex justify-center  ">
          <img src={laptop} alt="" className="p-5 h-[450px] rounded-3xl" />
        </div>

        {/* item 2 */}

        <div className="flex  flex-col space-y-3  md:w-1/2 p-4  items-center md:items-start">
          <div className="text-3xl md:text-5xl text-darkViolet drop-shadow-2xl   ">
            About me
          </div>

          <div className="text-sm md:text-lg  text-white p-5 md:p-0">
            <p>
              Hi there! This is Varant. I’m a Self-motivated and an enthusiastic
              developer, dedicated to broadening my horizon on a daily. I am a
              fresh Lebanese University graduate, who’s passionate and eager to
              add on my professional coding knowledge! Currently, i am a
              Front-end Web developer, specialized in React, and a Wordpress
              Developer/Freelancer.Nevertheless, I’m interested in anything Web
              related. I have a decent background in creating Wordpress
              Websites, updating outdated ones, and maintaining the excellence
              of websites.
            </p>
            <br />
            <p>
              {" "}
              I like to be challenged. Tough situations are opportunities for me
              to put all of my skills into practice and learn new ones to
              resolve the problem. I take the latter as a fun learning journey!
            </p>
          </div>
        </div>
      </div>

      <Skills/>
    </section>
  );
}
