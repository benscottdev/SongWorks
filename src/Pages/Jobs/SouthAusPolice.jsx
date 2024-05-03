import AnimatedPages from "../../Components/AnimatedPages";
import SouthAusPoliceVideo from "../../Assets/JobPageAssets/Videos/SouthAusPolice.mp4";
import Header from "../../Components/Header";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function SouthAusPolice() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/thegreenbin">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={SouthAusPoliceVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>South Australian Police</b> A fun road trip singalong helped the
            South Australian Police Force deliver a serious Easter road safety
            message.
            <br />
            <br />
            <b>Client:</b> South Australian Police <br /> <b>Agency:</b>{" "}
            Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default SouthAusPolice;
