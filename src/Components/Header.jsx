import swlogopink from "../../src/Assets/SW-Pink.png";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <NavBar />
      <img src={swlogopink} id="swLogo" />
    </div>
  );
}
export default Header;
