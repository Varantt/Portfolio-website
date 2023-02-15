import React, { useState } from "react";
import Experience from "./Experience";
import { eData } from "../e-data";
import useScroll from "../hooks/useScroll";

export default function WorkExperience() {
  const isVisible = useScroll("#workExperience")
  const [experienceList, setExperienceList] = useState(eData);
  return (
    <section
      id="workExperience"
      className={`${isVisible ? "contact-animation" : ""}   mt-8 mb-8 md:mt-32`}
    >
      <div className="  flex-col md:flex  justify-center items-center">
        <div className="text-3xl md:text-4xl mb-6 text-darkViolet pr-10 text-center md:text-justify">
          Experience
        </div>
        <div className="flex-col space-y-8 md:w-1/3 container-exp items-center justify-center mt-5 md:mt-0 ">
          {experienceList.map((experience, index) => {
            return <Experience {...experience} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
