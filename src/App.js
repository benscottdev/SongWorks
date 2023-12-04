import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import LetsJam from "./Pages/LetsJam";
import Header from "./Components/Header";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/letsjam" element={<LetsJam />} />
    </Routes>
  );
}
export default App;
