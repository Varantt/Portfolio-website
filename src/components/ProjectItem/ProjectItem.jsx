import React, { useRef , useEffect} from "react";
import { Link } from "react-router-dom";
import "./project-item.css";
import useScroll from "../../hooks/useScroll";

export default function ProjectItem({
  title,
  imgUrl,
  id,
  stack,
  link
}) {
  const projectRef = useRef(null);
  const isVisible = useScroll(projectRef);
  const animationDelay = id * 100;

  useEffect(() => {
    if (isVisible && projectRef.current) {
      projectRef.current.style.animationDelay = `${animationDelay}ms`;
      projectRef.current.classList.add("animate");
    }
  }, [isVisible, animationDelay]);


  return (
    <Link to = {link} target = "_blank">
    <div
      id={`project-${id}`}
      ref={projectRef}
      className={` project relative basis-full md:basis-[33.33vw] transition-colors rounded-lg cursor-pointer border border-liver border-solid `}
    >
        <div className="project-image">
          <img src={imgUrl} className="object-cover" alt="image url" />
        </div>
        <div className="project-content ">
          <div className="project-overlay flex flex-col gap-3">
            <h1>{title}</h1>
            <div className="project-sub-content">
              <div className="stacks flex gap-4 flex-wrap">
                {stack.map((stackEl, elIndex) => {
                  return (
                    <div
                      className="stack text-xs md:text-sm  rounded-full text-lightBlue bg-lightBlue bg-opacity-20"
                      key={elIndex}
                    >
                      {" "}
                      {stackEl}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>{" "}
        </div>
    </div>
      </Link>
  );
}
