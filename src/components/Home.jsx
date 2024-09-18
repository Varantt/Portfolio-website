import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact";
import Skills from "../components/Skills/Skills";
import WorkExperience from "./WorkExperience";

export default function Home() {
  return (
    <div
      id="home"
      className=" app overflow-clip m-auto w-full "
    >
        <Hero />
      <About />
      <Portfolio />
      <WorkExperience />
      <Skills />
      {/* <Contact /> */}
    </div>
  );
}
