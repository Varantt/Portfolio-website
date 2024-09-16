import React from "react";
import './skill.css';

export const Skill = ({ title, logo }) => {
const formattedTitle = title.split(" ").join("").toLowerCase();
  const skillClass = `skill-${formattedTitle} skill flex flex-col justify-between items-center  flex-shrink rounded border border-blackRaisin border-solid p-8 rounded-lg `;
  return (
    <div className={skillClass}>
      <img src={logo} alt={`logo-${formattedTitle}`} width="48" height="48" />
      <p className = "text-offWhite font-light mt-4">{title}</p>
    </div>
  );
};
