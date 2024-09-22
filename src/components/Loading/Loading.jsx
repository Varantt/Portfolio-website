import React from "react";
import "./loading.css";

export const Loading = () => {
  return (
    <div className="loader-wrapper flex items-center justify-center w-full h-[100svh] bg-white dark:bg-black">
      <div className="loader"></div>
    </div>
  );
};
