import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import refreshYourDriveVideo from "../../Assets/JobPageAssets/Videos/RefreshYourDrive_VIDEO.mp4";

function RefreshYourDrive() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
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
            <br />
            <b>Client:</b> Motor Accident Commission | <b>Agency:</b> Clemenger
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default RefreshYourDrive;
