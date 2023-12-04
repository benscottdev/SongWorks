import { Link } from "react-router-dom";

function BackBtn() {
  return (
    <Link className="backBtn" to="/home">
      back
    </Link>
  );
}
export default BackBtn;
