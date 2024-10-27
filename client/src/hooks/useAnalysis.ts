import { useState, useEffect } from "react";
import { IResult } from "../types/IResult";
export const useAnalysis = (result: IResult) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  useEffect(() => {
    if (result) {
      if (result.img instanceof File) {
        const url = URL.createObjectURL(result.img);
        setPreviewUrl(url);
      } else setPreviewUrl(result.img);
    }
  }, [result]);
  return previewUrl;
};
