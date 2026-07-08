import { skillCategories } from "../../data/skills-data";
import { Skill } from "../Skill/Skill";
import { ContentWrapper } from "../contentWrapper/ContentWrapper";

export default function Skills() {
  return (
    <section id="skills" className={` mt-32 `}>
      <ContentWrapper>
        <div id="skills-header" className="mb-7 ">
          <p className="mb-2 text-blackRaisin dark:text-offWhite text-opacity-60 text-sm md:text-md">
            Expertise
          </p>
          <h1 className="mb-10 text-blackRaisin dark:text-white text-4xl md:text-5xl">
            Skills
          </h1>
        </div>

        <div
          id="skills-body"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((category) => (
            <Skill
              title={category.title}
              primary={category.primary}
              additional={category.additional}
              key={category.id}
            />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
}
