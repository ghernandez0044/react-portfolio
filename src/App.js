import { useState, useEffect } from "react";
import useMediaQuery from './hooks/useMediaQuery'
import Navigation from "./components/Navigation";
import DotGroup from "./components/DotGroup";
import LandingPage from "./components/LandingPage";
import LineGradient from "./components/LineGradient";

function App() {
  // Create state variables
  const [ selectedPage, setSelectedPage ] = useState('home')
  const [ isTopOfPage, setIsTopOfPage ] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true)
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app bg-space-blue">
      <Navigation isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <LandingPage setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
    </div>
  );
}

export default App;
