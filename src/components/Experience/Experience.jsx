import React from "react";
import { useRef, useEffect, useState } from "react";
import "./experience.css";
import useScroll from "../../hooks/useScroll";

function Experience({
  era,
  title,
  company,
  role,
  type,
  description,
  isCurrent,
  tags = [],
  index = 0,
}) {
  const sectionRef = useRef(null);

  const isVisible = useScroll(sectionRef);

  const animationDelay = `${Math.min(index, 4) * 90}ms`;

  let [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setAnimated(true);
    }
  }, [isVisible]);

  return (
    <div
      className={` ${
        animated ? "active" : ""
      } experience  rounded  p-4 bg-white dark:bg-transparent shadow-custom dark:shadow-custom-dark`}
      ref={sectionRef}
      style={{ animationDelay: animationDelay }}
    >
      <div className=" flex flex-col md:grid container justify-center items-start gap-6">
        <div className="mb-2 experience-header flex items-center gap-3 flex-wrap">
          <div className="text-sm md:text-md text-lightBlue font-bold">
            {era}
          </div>
          {isCurrent && (
            <span className="text-xs font-medium text-lightBlue border border-lightBlue rounded-full px-2 py-[2px]">
              Current
            </span>
          )}
        </div>

        <div className="experience-footer flex flex-col gap-3 justify-center ">
          <div className="text-container flex flex-col">
            <div className={`text-xl text-blackRaisin dark:text-offWhite `}>
              {title}
            </div>
            <div className="text-sm text-lightBlue font-bold ">
              {company || role}
            </div>
          </div>

          <div
            className={`desc text-[13px] leading-relaxed text-blackRaisin dark:text-offWhite `}
          >
            {description}
          </div>

          {tags.length > 0 && (
            <div className="flex flex-row flex-wrap gap-2 mt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-blackRaisin dark:text-offWhite bg-offWhite dark:bg-blackRaisin rounded px-2 py-1 shadow-custom dark:shadow-custom-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="text-xs md:text-sm text-lightBlue  font-medium rounded bg-offWhite dark:bg-blackRaisin p-2 inline-block max-w-fit shadow-custom dark:shadow-custom-dark ">
            <span>{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
