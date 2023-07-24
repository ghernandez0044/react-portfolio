import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from './hooks/useMediaQuery'
import Navigation from "./components/Navigation";
import DotGroup from "./components/DotGroup";
import LandingPage from "./components/LandingPage";
import LineGradient from "./components/LineGradient";
import SkillSection from "./components/SkillSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  // Create state variables
  const [ selectedPage, setSelectedPage ] = useState('home')
  const [ isTopOfPage, setIsTopOfPage ] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage('home')
      }
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app bg-space-blue">
      <Navigation isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <LandingPage setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-fit">
          <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <SkillSection />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
