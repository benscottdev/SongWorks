import swlogopink from "../../src/Assets/SW-Pink.png";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <img src={swlogopink} alt="" />
      {/* <NavBar /> */}
    </div>
  );
}
export default Header;
