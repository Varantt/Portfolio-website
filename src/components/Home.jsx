import React from "react";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skills from './Skills';
import WorkExperience from './WorkExperience'

export default function Home() {
  return (
    <div id = "home" className=" app overflow-x-hidden">
      <Hero />
      <About />
      <Portfolio />
      <WorkExperience/>
      <Skills/>
      <Contact />
    </div>
  );
}
