import React from "react";
import { useRef } from "react";
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
        <div className="text-lg md:text-3xl text-white pl-6">{name}</div>
        <div className="text-sm md:text-md text-gray-500 pl-6">
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
