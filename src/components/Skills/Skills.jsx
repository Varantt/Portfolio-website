import React from "react";
import { BsCheck2All } from "react-icons/bs";
import useScroll from "../../hooks/useScroll";
import { skills } from "../../data/skills-data";
import { Skill } from "../Skill/Skill";
import { ContentWrapper } from "../contentWrapper/ContentWrapper";

export default function Skills() {
  let isVisible = useScroll("#skills");

  return (
    <section id="skills" className={` ${isVisible ? "in-view" : ""} mt-32 `}>
      <ContentWrapper>
        <div id="skills-header" className="mb-7 ">
          <p className="mb-2 text-offWhite text-opacity-60 text-sm md:text-md">
            Expertise
          </p>
          <h1 className="mb-10 text-white text-4xl md:text-5xl">Skills</h1>
        </div>

        <div
          id="skills-body"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {skills.map((skill, skillIndex) => {
            const { title, logo } = skill;
            return (
              <Skill
                title={title}
                logo={logo}
                index={skillIndex + 1}
                key={`skill-${skillIndex}`}
              />
            );
          })}
        </div>
      </ContentWrapper>
    </section>
  );
}
