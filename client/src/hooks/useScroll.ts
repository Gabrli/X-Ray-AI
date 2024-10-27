import { useState, useEffect } from "react";
export const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    scrollHandler(window.scrollY);
  }, []);

  const scrollHandler = (scroll: number) => {
    scroll > 0 ? setIsScrolling(true) : setIsScrolling(false);
  };

  window.addEventListener("scroll", () => scrollHandler(window.scrollY));
  return isScrolling;
};
