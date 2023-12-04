import swlogopink from "../../src/Assets/SW-Pink.png";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <motion.img
        src={swlogopink}
        alt=""
        initial={{ x: -550, y: 250, scale: 2.5 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ ease: "anticipate", duration: 1.5, delay: 1 }}
      />
      {/* <NavBar /> */}
    </div>
  );
}
export default Header;
