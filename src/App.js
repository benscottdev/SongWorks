import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import LetsJam from "./Pages/LetsJam";
import About from "./Pages/About";
import RefreshYourDrive from "./Pages/Jobs/RefreshYourDrive";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/letsjam" element={<LetsJam />} />
        <Route path="/about" element={<About />} />
        <Route path="/refreshyourdrive" element={<RefreshYourDrive />} />
      </Routes>
    </AnimatePresence>
  );
}
export default App;
