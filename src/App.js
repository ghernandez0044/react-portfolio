import { useState } from "react";
import useMediaQuery from './hooks/useMediaQuery'
import Navigation from "./components/Navigation";

function App() {
  // Create state variables
  const [ selectedPage, setSelectedPage ] = useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <div className="app bg-space-blue">
      <Navigation selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
