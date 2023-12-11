import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import theGreenBinVideo from "../../Assets/JobPageAssets/Videos/TheGreenBin_VIDEO.mp4";

function TheGreenBin() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
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
            <br /> <b>Client:</b> Green Industries <br /> <b>Agency</b>:
            Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default TheGreenBin;
