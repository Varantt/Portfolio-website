import React from "react";
import { useRef , useEffect, useState} from "react";
import "./experience.css";
import useScroll from "../../hooks/useScroll";
function Experience({
  name,
  description,
  type,
  startDate,
  endDate,
  logo,
  company,
  id
}) {
  const sectionRef = useRef(null);

  const isVisible = useScroll(sectionRef);

  const animationDelay = `${100 * id}ms`;

  let [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setAnimated(true);
    }
  }, [isVisible]);

  return (
    <section
      id="experience"
      className={` ${animated ? "active" : ""} experience  rounded  p-4`}
      ref={sectionRef}
      style={{ animationDelay: animationDelay }}
    >
        <div className=" flex flex-col md:grid container justify-center items-start gap-8">
          <div className="mb-2 experience-header ">
            <div className="text-sm md:text-md text-lightBlue font-bold">
              {startDate} - {endDate}
            </div>
          </div>

          <div className="experience-footer flex flex-col gap-3 justify-center ">
            <div className="experience-footer-header flex gap-4 items-center">
              <div className="logo bg-cover bg-no-repeat bg-center">
                <img
                  src={logo}
                  alt="logo"
                  width="48"
                  height="48"
                  className="rounded"
                />
              </div>

              <div className="text-container flex flex-col">
                {" "}
                <div className="text-xl text-white ">{name}</div>
                <div className="text-sm text-lightBlue font-bold ">
                  {company}
                </div>
              </div>
            </div>

            <div className="desc text-[13px] text-white">{description}</div>

            <div className="text-xs md:text-sm text-lightBlue  font-light  ">
              <span>{type}</span>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Experience;
