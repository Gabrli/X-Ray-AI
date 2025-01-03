import { TypeAnimation } from "react-type-animation";

export default function HeroTitle() {
  return (
    <h1 className="text-white text-center font-bold ">
      <TypeAnimation
        sequence={[
          "Transforming X-Rays into Insights: Precision Bone Analysis with AI",
          1000,
        ]}
        wrapper="h2"
        className="leading-none text-5xl mobile1:text-2xl "
        speed={50}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </h1>
  );
}
