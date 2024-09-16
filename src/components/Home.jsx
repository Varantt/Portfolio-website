import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact";
import Skills from '../components/Skills/Skills';
import WorkExperience from './WorkExperience'

export default function Home() {
  return (
    <div
      id="home"
      className=" app overflow-x-hidden 2xl:max-w-[1500px] xl:max-w-[1230px] md:max-w-none md:p-8  p-4 sm:p-4 m-auto w-full"
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
