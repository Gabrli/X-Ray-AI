import Hero from "./components/hero/hero";
import TopHeader from "./components/topHeader/topHeader";
import "./index.css";
import { isMobileContext } from "./contexts/isMobileContext";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [windowX, setWindowX] = useState(0)

  useEffect(() => {
    windowX <= 396 ? setIsMobile(true) : ''
  }, [windowX])

  window.addEventListener('resize', () =>{setWindowX(window.innerWidth)})
  
  return (
    <isMobileContext.Provider value={isMobile}>
      <main className="">
      
      <TopHeader />
      <section className="w-full flex justify-center items-center pt-40">
        <Hero/>
      </section>
      
    </main>
    </isMobileContext.Provider>
  );
}

export default App;
