import AnimatedPages from "../../Components/AnimatedPages";
import happyWashVideo from "../../Assets/JobPageAssets/Videos/HappyWash.mp4";
import Header from "../../Components/Header";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function HappyWash() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/healthCheck">
          <NextPage />
        </Link>
        <Link to="/fantasticnoodles">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={happyWashVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Happy Wash.</b> Car owners aren’t huge fans of visiting
            car-washes, so we wrote a track encouraging them to do it for their
            car. <br />
            <br />
            <b>Client:</b> OTR <br /> <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default HappyWash;
