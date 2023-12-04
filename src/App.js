import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import LetsJam from "./Pages/LetsJam";
import RefreshYourDrive from "./Pages/Jobs/RefreshYourDrive";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/letsjam" element={<LetsJam />} />
      <Route path="/refreshyourdrive" element={<RefreshYourDrive />} />
    </Routes>
  );
}
export default App;
