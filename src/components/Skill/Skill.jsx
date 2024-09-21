import React from "react";
import "./skill.css";

export const Skill = ({ title, logo, index }) => {
  const formattedTitle = title.split(" ").join("").toLowerCase();
  const skillClass = `skill-${formattedTitle} skill shadow-custom dark:shadow-custom-dark flex flex-col justify-between items-center  flex-shrink rounded border border-offWhite dark:border-blackRaisin bg-white dark:bg-transparent border-solid p-8 `;

  return (
    <div className={skillClass}>
      <img src={logo} alt={`logo-${formattedTitle}`} width="48" height="48" />
      <p className="text-blackRaisin dark:text-offWhite font-light mt-4">
        {title}
      </p>
    </div>
  );
};
