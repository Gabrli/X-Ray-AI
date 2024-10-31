import { TypeAnimation } from "react-type-animation";
import { IAnalysis } from "../../types/IAnalysis";
import { useAnalysis } from "../../hooks/useAnalysis";

export default function Analysis(props: IAnalysis) {
  const { result, isActive } = props;
  const previewUrl = useAnalysis(result);

  return (
    <div
      className={`w-full flex justify-center items-center transition duration-300 ease-in-out ${
        isActive ? "h-[46vh] mobile2:h-[55vh] " : "h-[0vh]"
      }  "
      }`}
    >
      <div
        className={`w-[20%]  border transition duration-300 ease-in-out p-4 rounded-[8px] h-full  border-primary ${
          isActive ? "opacity-100" : "opacity-0"
        } bg-secondary mobile2:w-[90%] `}
      >
        <h3 className="font-medium text-[20px]">Results of analysis</h3>
        <p>
          <TypeAnimation
            sequence={[
              `Unless my eyes are deceiving me, we are dealing with damage here: ${result.text}`,
              1000,
            ]}
            speed={55}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
        <section className="w-full pt-6 pb-6 flex justify-center">
          <img
            className="h-[300px] w-4/5 "
            src={previewUrl as string}
            alt={result.text}
          />
        </section>
      </div>
    </div>
  );
}
