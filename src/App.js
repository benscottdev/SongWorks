import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LetsJam from "./Pages/LetsJam";
// Job Page Imports Below
import RefreshYourDrive from "./Pages/Jobs/RefreshYourDrive";
import StarsOfSummer from "./Pages/Jobs/StarsOfSummer";
import Foodland from "./Pages/Jobs/Foodland";
import Cota from "./Pages/Jobs/Cota";
import QuitYourWay from "./Pages/Jobs/QuitYourWay";
import FantasticNoodles from "./Pages/Jobs/FantasticNoodles";
import Moes from "./Pages/Jobs/Moes";
import HappyWash from "./Pages/Jobs/HappyWash";
import TheGreenBin from "./Pages/Jobs/TheGreenBin";
import WordsGrowMinds from "./Pages/Jobs/WordsGrowMinds";
import IWantYou from "./Pages/Jobs/IWantYou";
import Wikicamps from "./Pages/Jobs/Wikicamps";
import CookieButter from "./Pages/Jobs/CookieButter";
import BigCheese from "./Pages/Jobs/BigCheese";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/letsjam" element={<LetsJam />} />
        <Route path="/about" element={<About />} />
        <Route path="/refreshyourdrive" element={<RefreshYourDrive />} />
        <Route path="/starsofsummer" element={<StarsOfSummer />} />
        <Route path="/foodland" element={<Foodland />} />
        <Route path="/cota" element={<Cota />} />
        <Route path="/quityourway" element={<QuitYourWay />} />
        <Route path="/fantasticnoodles" element={<FantasticNoodles />} />
        <Route path="/moes" element={<Moes />} />
        <Route path="/happywash" element={<HappyWash />} />
        <Route path="/thegreenbin" element={<TheGreenBin />} />
        <Route path="/wordsgrowminds" element={<WordsGrowMinds />} />
        <Route path="/healthcheck" element={<IWantYou />} />
        <Route path="/wikicamps" element={<Wikicamps />} />
        <Route path="/cookiebutter" element={<CookieButter />} />
        <Route path="/bigcheese" element={<BigCheese />} />
      </Routes>
    </AnimatePresence>
  );
}
export default App;
