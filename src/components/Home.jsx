import React from "react";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className=" app overflow-x-hidden">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
