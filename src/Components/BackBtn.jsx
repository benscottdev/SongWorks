import { Link } from "react-router-dom";
import backArrow from "../Assets/SW_backArrow.png";

function BackBtn() {
  return (
    <Link className="backBtn" to="/">
      <img src={backArrow} alt="" />
    </Link>
  );
}
export default BackBtn;
