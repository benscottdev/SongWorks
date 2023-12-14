import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import cookieButterVideo from "../../Assets/JobPageAssets/Videos/CookieButter.mp4";

function CookieButter() {
  return (
    <AnimatedPages>
      <Header />

      <div className="jobAboutContainer">
        <Link to="/wikicamps">
          <NextPage />
        </Link>
        <Link to="/bigcheese">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={cookieButterVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Cookie Butter.</b> San Churro make a soft, creamy cookie butter
            that’s well worthy of obsession. So we created a jingle to match.
            <br />
            <br />
            <b>Client:</b> San Churro <br /> <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default CookieButter;
