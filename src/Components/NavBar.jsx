import { Link } from "react-router-dom";
import instagramLogo from "../Assets/SW_instagramLogo.png";
import facebookLogo from "../Assets/SW_facebookLogo.png";
import twitterLogo from "../Assets/SW_twitterLogo.png";

function NavBar() {
  return (
    <div className="navLinks">
      <Link className="navLinkButton" to="/about">
        about
      </Link>
      <Link className="navLinkButton" to="/letsjam">
        let's jam
      </Link>
      <div className="socialLogos">
        <a href="https://www.instagram.com/thesongworks/" target="_blank">
          <img src={instagramLogo} alt="Instagram Link" />
        </a>
        <a href="#">
          <img src={facebookLogo} alt="Facebook Link" />
        </a>
        <a href="#">
          <img src={twitterLogo} alt="Facebook Link" />
        </a>
      </div>
    </div>
  );
}
export default NavBar;
