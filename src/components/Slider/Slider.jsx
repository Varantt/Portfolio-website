import React, { useState, useRef } from "react";
import nextIcon from "../../../public/assets/icons/icons8-next.png";
import prevIcon from "../../../public/assets/icons/icons8-back.png";
import "./slider.css";

export const Slider = ({ children, currentSlide, setCurrentSlide }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const singleProject = document.querySelector(".project");

  const totalSlides = children.length;

  const previousSlide = () => {
    let newSlide = currentSlide - 1;
    if (newSlide < 0) {
      newSlide = totalSlides - 1;
containerRef.current.scrollLeft =
  containerRef.current.scrollWidth - containerRef.current.clientWidth;
    } else {
      const projectWidth = singleProject
        ? singleProject.getBoundingClientRect().width
        : 0;
      containerRef.current.scrollLeft -= projectWidth / 1.25;
    }
    setCurrentSlide(newSlide);

    // update scroll

    containerRef.current.scrollLeft -=
      singleProject.getBoundingClientRect().width;
  };

  const nextSlide = () => {
    let newSlide = currentSlide + 1;
    if (newSlide >= totalSlides) {
      newSlide = 0;
      containerRef.current.scrollLeft = 0;
    } else {
      containerRef.current.scrollLeft +=
        singleProject.getBoundingClientRect().width / 1.25;
    }
    setCurrentSlide(newSlide);
  };

  const startDragging = (e) => {
    setIsDragging(true);
    const container = containerRef.current;
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const whileDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const currentX = e.pageX - containerRef.current.offsetLeft;

    const walk = currentX - startX;

    const newScrollLeft = scrollLeft - walk;

    // Apply the new scroll position
    containerRef.current.scrollLeft = newScrollLeft;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <div
      id="slider-container"
      className={isDragging ? "cursor-grabbing" : ""}
      onMouseDown={(e) => startDragging(e)}
      onMouseMove={whileDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
    >
      <div className="slider-buttons flex   justify-end  ">
        <div className="btn-container flex  gap-2">
          <div
            className="prev-btn cursor-pointer m-auto"
            onClick={previousSlide}
          >
            <img src={prevIcon} width="32" height="32" alt="Previous" />
          </div>
          <div className="next-btn cursor-pointer m-auto" onClick={nextSlide}>
            <img src={nextIcon} width="32" height="32" alt="Next" />
          </div>
        </div>
      </div>
      <div
        className="projects-container flex p-10 flex-shrink-0 overflow-x-hidden w-full "
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
};
