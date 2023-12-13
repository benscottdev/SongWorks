import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import refreshYourDriveVideo from "../../Assets/JobPageAssets/Videos/RefreshYourDrive.mp4";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function RefreshYourDrive() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/thegreenbin">
          <NextPage />
        </Link>
        <Link to="/quityourway">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={refreshYourDriveVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Refresh Your Drive.</b> This super bubbly 70’s soft-drink style
            jingle encourages drivers to take a refreshing break on long trips.
            <br />
            <br />
            <b> Client:</b> Motor Accident Commission <br />
            <b>Agency:</b> Clemenger
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default RefreshYourDrive;
