import AnimatedPages from "../../Components/AnimatedPages";
import cotaVideo from "../../Assets/JobPageAssets/Videos/Cota.mp4";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";

function Cota() {
  return (
    <AnimatedPages>
      <Header />

      <div className="jobAboutContainer">
        <Link to="/foodland">
          <NextPage />
        </Link>
        <Link to="/thegreenbin">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={cotaVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>COTA Travel Insurance.</b> A ridiculous idea from Showpony’s
            Creative Director became an equally ridiculous TVC. <br />
            <br />
            <b>Client:</b> COTA Travel Insurance <br /> <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default Cota;
