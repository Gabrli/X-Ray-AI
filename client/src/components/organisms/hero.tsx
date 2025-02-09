import HeroTitle from "../atomics/heroTitle";
import Animation from "../../assets/animations/animation.json";
import Lottie from "react-lottie";
import { useContext } from "react";
import { isMobileContext } from "../../contexts/isMobileContext";
import Widget from "../atomics/widget";
import { FaTools, FaNetworkWired, FaFire, FaCodepen } from "react-icons/fa";
import Btn from "../atomics/btn";
export default function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    renderer: "svg",
  };
  const isMobile = useContext(isMobileContext);
  return (
    <section className="w-1/2 h-full flex justify-center items-center flex-col mobile1:w-full  mobile2:w-full  ">
      <section className="flex justify-center items-center gap-[10px] pb-6 mobile1:flex-col mobile1:w-full mobile1:items-start mobile1:pl-4">
        <Widget
          content="AI Medicine revolution"
          variant="light"
          icon={<FaTools />}
          styles="mr-[0] ml-[0]"
        />
        <Widget
          content="Special CNN"
          variant="dark"
          icon={<FaNetworkWired />}
          styles="mr-[0] ml-[0]"
        />
      </section>
      <HeroTitle />
      <div className="flex justify-center items-center gap-[10px] pt-10 mobile1:flex-col mobile1:w-full">
        <Btn
          content="Get started"
          href="#fileloader"
          icon={<FaFire />}
          variant="cta-light"
          styles="transition duration-500 ease-in-out font-medium text-white pl-8 pr-8 pt-3 pb-3 rounded-[4px]"
          astyles="flex justify-center items-center gap-[10px]"
        />

        <Btn
          content="About the project... "
          href="#about"
          icon={<FaCodepen />}
          styles="w-[260px] bg-secondary transition duration-500 ease-in-out font-medium text-white pl-8 pr-8 pt-3 pb-3 rounded-[4px]"
          astyles="flex justify-center items-center gap-[10px]"
        />
      </div>

      <div className="pb-10 pt-10  mobile1:pb-0 mobile2:pt-8">
        <Lottie
          options={defaultOptions}
          height={isMobile ? 400 : 800}
          width={isMobile ? 400 : 800}
        />
      </div>
    </section>
  );
}
