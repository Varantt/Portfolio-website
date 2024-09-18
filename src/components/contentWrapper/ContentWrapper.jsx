import React from 'react'

export const ContentWrapper = ({children}) => {
  return (
    <div className="2xl:max-w-[1500px] xl:max-w-[1230px] md:max-w-none md:p-8  p-4 sm:p-4 m-auto w-full">
        {children}
    </div>
  );
}
