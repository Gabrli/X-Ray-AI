import ButtonStarted from "./buttonStarted";
import HeroTitle from "./heroTitle";
import Animation from '../../assets/animations/animation.json'
import Lottie from 'react-lottie';
import { useContext } from "react";
import { isMobileContext } from "../../contexts/isMobileContext";
export default function Hero(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        renderer: 'svg'
    }
    const isMobile = useContext(isMobileContext)
    return (
       

        <section className="w-custom-w-hero h-custom-h-hero bg-gray-400 backdrop-blur-md bg-opacity-10 rounded-full border border-gray-100 flex justify-center items-center flex-col mobile1:w-custom-mobile-w-hero mobile1:h-custom-mobile-h-hero mobile2:w-custom-mobile2-w-hero mobile2:h-custom-mobile2-h-hero">
             <div className="pb-10 mobile1:pb-0">
             <Lottie
                
                options={defaultOptions}
                height={isMobile ? 130 : 230}
                width={isMobile ? 130 : 230}
                
               />
             </div>
            <HeroTitle/>
            <ButtonStarted/>
        </section>
    )
}