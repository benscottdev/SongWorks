import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import theGreenBinVideo from "../../Assets/JobPageAssets/Videos/TheGreenBin.mp4";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function TheGreenBin() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/wikicamps">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={theGreenBinVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>The Green Bin.</b> How do you help people remember the long list
            of things that can go in the green bin? <br />
            <br /> <b>Client:</b> Green Industries (SA Govt)
            <br /> <b>Agency</b>: Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default TheGreenBin;
