import Hero from "./Hero/Hero";
import About from "./About/About";
import WorkExperience from "./WorkExperience/WorkExperience";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
