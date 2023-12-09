import React from "react";
import { useRef } from "react";
import "./experience.css";
function Experience({ name, description, type, startDate, endDate, logo }) {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   if (logo && sectionRef.current) {
  //     sectionRef.current.style.setProperty(
  //       "--background-image",
  //       `url(${logo})`
  //     );
  //   }
  // }, []);

  return (
    <section className="experience" ref={sectionRef}>
      <div className="">
        <div className="ml-6 mb-2 experience-header flex flex-row justify-start items-center">
          <div className="logo bg-cover bg-no-repeat bg-center">
            <img src={logo} alt="logo" width="48" height="48" className = "rounded-sm" />
          </div>
          <div className="text-lg md:text-3xl text-white pl-4">{name}</div>
        </div>

        <div className="text-sm md:text-md text-gray-500 pl-4">
          {startDate} - {endDate}
        </div>

        <div className="">
          {description.map((captions, index) => {
            return (
              <div
                className="text-xs md:text-sm text-gray-300 pl-6 leading-loose"
                key={index}
              >
                {captions}
              </div>
            );
          })}
        </div>
        <div className="text-xs md:text-sm text-red-300 pl-6 ">
          <span></span>
          {type}
        </div>
      </div>
    </section>
  );
}

export default Experience;
