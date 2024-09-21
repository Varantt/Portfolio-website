import React from "react";
import './featured-item.css'

const FeaturedItem = ({ title, imgUrl, stack }) => {
  return (
    <div
      id="featured-project"
      className="featured-project relative transition-colors rounded-lg"
    >
      <div className="featured-project-image">
        <img
          src={imgUrl}
          alt="Featured project"
          className="h-auto max-w-full rounded-lg"
        />
      </div>
      <div className="featured-project-content">
        <div className="featured-project-overlay flex flex-col gap-3">
          <h1>{title}</h1>
          <div className="featured-project-sub-content">
            <div className="stacks flex gap-4 flex-wrap">
              {stack.map((stackEl, index) => (
                <div
                  key={index}
                  className="stack rounded-full bg-lightBlue text-black bg-opacity-65"
                >
                  {stackEl}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
