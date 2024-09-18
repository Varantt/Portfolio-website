import React, { useRef, useEffect, useState } from "react";
import "./skill.css";
import useScroll from "../../hooks/useScroll";

export const Skill = ({ title, logo, index }) => {
  const skillRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const isVisible = useScroll(skillRef);

  const animationDelay = index * 100;

  useEffect(() => {
    if (isVisible) {
      setAnimated(true);
    }
  }, [isVisible]);

  const formattedTitle = title.split(" ").join("").toLowerCase();
  const skillClass = `skill-${formattedTitle} ${
    animated ? "active" : ""
  } skill flex flex-col justify-between items-center flex-shrink rounded border border-blackRaisin border-solid p-8 rounded-lg`;

  return (
    <div
      className={skillClass}
      ref={skillRef}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <img src={logo} alt={`logo-${formattedTitle}`} width="48" height="48" />
      <p className="text-offWhite font-light mt-4">{title}</p>
    </div>
  );
};
