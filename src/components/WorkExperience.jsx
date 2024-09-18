import React, { useState } from "react";
import Experience from "./Experience/Experience";
import { eData } from "../data/jobs-data";
import useScroll from "../hooks/useScroll";
import { ContentWrapper } from "./contentWrapper/ContentWrapper";

export default function WorkExperience() {
  const isVisible = useScroll("#workExperience");
  const [experienceList, setExperienceList] = useState(eData);
  return (
    <section
      id="workExperience"
      className={`${
        isVisible ? "contact-animation" : ""
      }  mt-16 md:mt-32 mb-8 `}
    >
      <ContentWrapper>
        <div className="  flex-col md:flex  ">
          <div className="text-4xl md:text-5xl mb-10 text-offWhite pr-10  md:text-justify">
            Experience
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
