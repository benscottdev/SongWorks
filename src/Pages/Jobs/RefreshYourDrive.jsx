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
        <Link to="/sunflowers">
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
            <b>Refresh Your Drive.</b> For this 60 second radio spot we
            channelled the super fizzy soft drink ads of the 70’s, encouraging
            drivers to take a refreshing break on long road trips.
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
