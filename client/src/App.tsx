import Hero from "./components/organisms/hero";
import TopHeader from "./components/organisms/topHeader";
import "./index.css";
import { isMobileContext } from "./contexts/isMobileContext";
import FileLoader from "./components/atomics/fileLoader";
import SectionHeading from "./components/atomics/sectionHeading";
import Faq from "./components/organisms/faq";
import Footer from "./components/organisms/footer";
import About from "./components/organisms/about";
import Analysis from "./components/organisms/analysis";
import { useApp } from "./hooks/useApp";
import Widget from "./components/atomics/widget";
import { FaPhotoVideo, FaCodepen, FaQuestion } from "react-icons/fa";

function App() {
  const { isMobile, setResult, result, isActive, setIsActive } = useApp();

  return (
    <isMobileContext.Provider value={isMobile}>
      <main className="w-full">
        <TopHeader />
        <section className="w-full flex justify-center items-center pt-40 flex-col pb-60">
          <Hero />
        </section>
        <Widget content="Fast Analysis" variant="light" icon={<FaPhotoVideo/>}/>
        <SectionHeading text="AI analysis" />
        <FileLoader setIsActive={setIsActive} setResult={setResult} isActive={isActive} />
        {isActive ? <Analysis result={result} isActive={isActive} /> : ""}
        <Widget content="Something to know" variant="dark" icon={<FaCodepen/>}/>
        <About />
        <Widget content="Popular questions..." variant="light" icon={<FaQuestion/>}/>
        <SectionHeading styles="pb-10" text="Needed answers..." />
        <Faq />
        <SectionHeading text="Get in touch" />
        <Footer />
      </main>
    </isMobileContext.Provider>
  );
}

export default App;
