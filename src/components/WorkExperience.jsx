import React, { useState } from "react";
import Experience from "./Experience/Experience";
import { eData } from "../data/jobs-data";
import useScroll from "../hooks/useScroll";

export default function WorkExperience() {
  const isVisible = useScroll("#workExperience")
  const [experienceList, setExperienceList] = useState(eData);
  return (
    <section
      id="workExperience"
      className={`${
        isVisible ? "contact-animation" : ""
      }  mt-16 md:mt-32 mb-8 `}
    >
      <div className="  flex-col md:flex  ">
        <div className="text-4xl md:text-5xl mb-6 text-offWhite pr-10  md:text-justify">
           Experience
        </div>
        <div className="flex flex-col gap-4  mt-5 md:mt-0 ">
          {experienceList
            .slice()
            .reverse()
            .map((experience, index) => {
              return <Experience {...experience} key={index} />;
            })}
        </div>
      </div>
    </section>
  );
}
