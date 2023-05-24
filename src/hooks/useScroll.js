import { useState, useEffect } from "react";

const useScroll = (id) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const portfolioSection = document.querySelector(id);
    const handleScroll = () => {
      const portfolioSectionTop = portfolioSection.getBoundingClientRect().top;
      const portfolioSectionBottom =
        portfolioSection.getBoundingClientRect().bottom;

      if (
        portfolioSectionTop < window.innerHeight &&
        portfolioSectionBottom > 0
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return isVisible;
};

export default useScroll;
