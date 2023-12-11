import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navLinks">
      <Link className="navLinkButton" to="/home">
        the work
      </Link>
      <Link className="navLinkButton" to="/about">
        the story
      </Link>
      <Link className="navLinkButton" to="/letsjam">
        let's jam
      </Link>
    </div>
  );
}
export default NavBar;
