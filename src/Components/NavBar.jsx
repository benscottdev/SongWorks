import { Link } from "react-router-dom";
import instagramLogo from "../Assets/SW_instagramLogo.png";

function NavBar() {
  return (
    <div className="navLinks">
      <Link className="navLinkButton" to="/about">
        the story
      </Link>
      <Link className="navLinkButton" to="/letsjam">
        let's jam
      </Link>
      <div className="socialLogos">
        <a href="https://www.instagram.com/thesongworks/" target="_blank">
          <img src={instagramLogo} alt="Instagram Link" />
        </a>
      </div>
    </div>
  );
}
export default NavBar;
