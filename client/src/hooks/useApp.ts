import { useState, useEffect } from "react";
import { useIsMobile } from "./useIsMobile";
import { IResult } from "../types/IResult";
export const useApp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [result, setResult] = useState<IResult>({ text: "", img: "" });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    useIsMobile(window.innerWidth);
  }, []);
  useEffect(() => {
    if (result.text && result.img) {
      setIsActive(true);
      window.scrollBy(0, 300);
    } else setIsActive(false);
  }, [result]);
  window.addEventListener("resize", () =>
    setIsMobile(useIsMobile(window.innerWidth))
  );

  return {
    isActive,
    setResult,
    result,
    isMobile,
    setIsActive,
  };
};
