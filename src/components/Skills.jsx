import React from "react";
import { BsCheck2All } from "react-icons/bs";
import useScroll from "../hooks/useScroll";

export default function Skills() {
  let isVisible = useScroll("#skills");

  return (
    <section id="skills" className={` ${isVisible ? "in-view" : ""} mt-32 `}>
      <div className="text-3xl md:text-4xl text-darkViolet text-center shadow-inner mb-3 md:mb-8 ">
        Skills
      </div>

      {/* front-end */}
      <div className="flex flex-col md:flex-row flex-wrap  mb-4  justify-center items-center md:space-x-6 md:space-y-0 space-y-4 ">
        {/* item 1 */}
        <div
          className={` skill md:h-[375px] w-5/6 md:m-14 box-shadow md:w-1/3  p-16 md:p-10  text-darkViolet   transition-colors duration-150  rounded-md font-bold  border-white   ${
            isVisible ? "slide-in" : ""
          }  `}
        >
          <div className="mb-6  skill-title text-white text-center text-xl ">
            Front-End{" "}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center  ">
            <div className="flex justify-center ">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">HTML</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>
            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">CSS</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>

            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">SCSS</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>

            <div className="flex justify-center ">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">Javascript</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>
            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">Bootstrap</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>
            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">TailwindCSS</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>
            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">ReactJs</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>
            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">jQuery</div>
                <div className="text-white text-sm font-light">
                  Intermediate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* backend */}

        <div
          className={` skill box-shadow md:h-[375px] w-5/6 md:w-1/3 p-16 md:p-10  text-darkViolet hover:bg-transparent     rounded-md font-bold  border-white  transition-colors duration-150 ${
            isVisible ? "slide-right" : ""
          }  `}
        >
          <div className="mb-6  skill-title text-white text-center text-xl ">
            Back-end{" "}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="flex justify-center ">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">NodeJs</div>
                <div className="text-white text-sm font-light">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">Java</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>
            <div className="flex justify-center ">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">ExpressJs</div>
                <div className="text-white text-sm font-light">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">PHP</div>
                <div className="text-white text-sm font-light">Proficient</div>
              </div>
            </div>
            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">SQL/MySQL</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>
            <div className="flex justify-center">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">NextJS</div>
                <div className="text-white text-sm font-light">
                  Intermediate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* other */}
        <div
          className={` skill box-shadow w-5/6 md:w-1/3 p-10  text-darkViolet hover:bg-transparent rounded-md font-bold  border-white  transition-colors duration-150 ${
            isVisible ? "slide-down" : ""
          }  `}
        >
          <div className="mb-6  skill-title text-white text-center text-xl ">
            Other{" "}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="flex justify-center ">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">Wordpress</div>
                <div className="text-white text-sm font-light">Experienced</div>
              </div>
            </div>
            <div className="flex justify-center ">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">C/C++</div>
                <div className="text-white text-sm font-light">Proficient</div>
              </div>
            </div>
            <div className="flex justify-center ">
              <BsCheck2All size={19} className="mr-2" />
              <div className="flex-col ">
                <div className="">React Native</div>
                <div className="text-white text-sm font-light">Proficient</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
