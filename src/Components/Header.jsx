import swlogoblk from "../../src/Assets/SW_Black.png";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <NavBar />
      <Link to="/">
        <img src={swlogoblk} id="swLogo" />
      </Link>
    </div>
  );
}
export default Header;
