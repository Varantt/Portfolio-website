import React from "react";

function Experience({ name, description, type, startDate, endDate }) {
  return (
    <section id="experience">
      <div className="">
        <div className="text-lg md:text-3xl text-white pl-6">{name}</div>
        <div className="text-sm md:text-md text-gray-500 pl-6">
          {startDate} - {endDate}
        </div>

        <div className="">
          {
            description.map((captions, index) => {
              return (
                <div className="text-xs md:text-sm text-gray-300 pl-6 leading-loose" key = {index}>
                  {captions}
                </div>
              );
            })
          }
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
