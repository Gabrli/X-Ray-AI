import { useEffect, useState } from "react";
import ButtonExport from "./buttonExport";
import { IResult } from "../../types/IResult";

export default function Analysic(props: { result: IResult }) {
  const { result } = props;
  const [isActive, setIsActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  useEffect(() => {
    if (result) {
      result.text || result.img ? setIsActive(true) : setIsActive(false);
      if (result.img instanceof File) {
        const url = URL.createObjectURL(result.img);
        setPreviewUrl(url);
      } else setPreviewUrl(result.img);
    }
  }, [result]);
  return (
    <div
      className={`w-full flex justify-center items-center transition duration-300 ease-in-out   ${
        isActive ? "h-[48vh]" : "h-[0vh]"
      }`}
    >
      <div className={`w-[32%]  border transition duration-300 ease-in-out p-4 rounded-[8px] h-full  border-primary ${isActive ? "opacity-100" : "opacity-0"} bg-secondary`}>
        <h3 className="font-medium text-[20px]">Results of analysis</h3>
        <p>
        After processed analysis by AI model is the:
        <strong>{result.text}</strong>   
       </p>
        <section className="w-full pt-6 pb-6 flex justify-center">
          <img
            className="h-[260px]"
            src={previewUrl as string}
            alt={result.text}
          />
        </section>
        <ButtonExport />
      </div>
    </div>
  );
}
