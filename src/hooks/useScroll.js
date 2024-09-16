import { useState, useEffect, useCallback } from "react";

const useScroll = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    setIsVisible(isInViewport);
  }, [ref]);

  useEffect(() => {
    const currentRef = ref.current; // Capture the current value

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isVisible;
};

export default useScroll;
