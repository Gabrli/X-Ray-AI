import Hero from "./components/hero/hero";
import TopHeader from "./components/topHeader/topHeader";
import "./index.css";
import { isMobileContext } from "./contexts/isMobileContext";
import { useEffect, useState } from "react";
import FileLoader from "./components/fileLoader/fileLoader";
import SectionHeading from "./components/heading/sectionHeading";

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {isMobileHandler(window.innerWidth)}, [])

  const isMobileHandler = (width: number) => {
    if(width <= 396) setIsMobile(true)
    else setIsMobile(false)
  }
 

  window.addEventListener('resize', () => isMobileHandler(window.innerWidth))
  
  return (
    <isMobileContext.Provider value={isMobile}>
      <main className="">
      
      <TopHeader />
      <section className="w-full flex justify-center items-center pt-40">
        <Hero/>
      </section>
      <SectionHeading text="AI analysis"/>
      <FileLoader/>
      
      
    </main>
    </isMobileContext.Provider>
  );
}

export default App;
