import Hero from "./components/hero/hero";
import TopHeader from "./components/topHeader/topHeader";
import "./index.css";
import { isMobileContext } from "./contexts/isMobileContext";
import { useEffect, useState } from "react";
import FileLoader from "./components/fileLoader/fileLoader";
import SectionHeading from "./components/heading/sectionHeading";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Analysic from "./components/analysic/analysic";
import { useIsMobile } from "./hooks/useIsMobile";
import { IResult } from "./types/IResult";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [result, setResult] = useState<IResult>({text: '', img: ''})
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    useIsMobile(window.innerWidth);
  }, []);
  useEffect(() => {
    if(result.text && result.img){
      setIsActive(true)
      window.scrollBy(0, 300)
    } else setIsActive(false)
  }, [result])
  window.addEventListener("resize", () =>
    setIsMobile(useIsMobile(window.innerWidth))
  );

  return (
    <isMobileContext.Provider value={isMobile}>
      <main className="">
        <TopHeader />
        <section className="w-full flex justify-center items-center pt-40">
          <Hero />
        </section>
        <SectionHeading text="AI analysis" />
        <FileLoader setIsActive={setIsActive} setResult={setResult}/>
        { isActive ? 
        <Analysic result={result} isActive={isActive}/>
        :
        ''
}
        <About />
        <SectionHeading text="Needed answers..." />
        <Faq />
        <SectionHeading text="Get in touch" />
        <Footer />
      </main>
    </isMobileContext.Provider>
  );
}

export default App;
