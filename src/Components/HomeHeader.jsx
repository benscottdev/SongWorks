import swlogoblk from "../../src/Assets/SW_Black.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="homeHeader">
      <NavBar />
      <Link to="/">
        <img src={swlogoblk} id="swLogo" />
      </Link>
    </div>
  );
}
export default Header;
