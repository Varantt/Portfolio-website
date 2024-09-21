import React, { useRef, useState } from "react";
import Experience from "../Experience/Experience";
import { eData } from "../../data/jobs-data";
import useScroll from "../../hooks/useScroll";
import { ContentWrapper } from "../contentWrapper/ContentWrapper";
import "./work-experience.css";

export default function WorkExperience() {
  const [experienceList, setExperienceList] = useState(eData);
  const workExperienceRef = useRef(null);

  return (
    <section
      id="workExperience"
      ref={workExperienceRef}
      className={` mt-16 md:mt-32 mb-8 `}
    >
      <ContentWrapper>
        <div className="  flex-col md:flex  ">
          <div className={`text-4xl md:text-5xl mb-10 pr-10 md:text-justify`}>
            <p className="mb-2 text-blackRaisin dark:text-offWhite text-opacity-60 text-sm md:text-md">
              Portfolio
            </p>
            <h1 className="mb-10 text-blackRaisin dark:text-offWhite text-4xl md:text-5xl">
              Experience
            </h1>
          </div>
          <div className="flex flex-col gap-4  mt-5 md:mt-0 ">
            {experienceList
              .slice()
              .reverse()
              .map((experience, index) => {
                return (
                  <Experience
                    {...experience}
                    key={experience.id}
                    id={experience.id}
                  />
                );
              })}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}
