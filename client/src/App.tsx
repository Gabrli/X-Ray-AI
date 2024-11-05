import Hero from "./components/hero/hero";
import TopHeader from "./components/topHeader/topHeader";
import "./index.css";
import { isMobileContext } from "./contexts/isMobileContext";
import FileLoader from "./components/fileLoader/fileLoader";
import SectionHeading from "./components/heading/sectionHeading";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Analysis from "./components/analysic/analysis";
import { useApp } from "./hooks/useApp";

function App() {
  const { isMobile, setResult, result, isActive, setIsActive } = useApp();

  return (
    <isMobileContext.Provider value={isMobile}>
      <main className="">
        <TopHeader />
        <section className="w-full flex justify-center items-center pt-40">
          <Hero />
        </section>
        <SectionHeading text="AI analysis" />
        <FileLoader setIsActive={setIsActive} setResult={setResult} isActive={isActive} />
        {isActive ? <Analysis result={result} isActive={isActive} /> : ""}
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
