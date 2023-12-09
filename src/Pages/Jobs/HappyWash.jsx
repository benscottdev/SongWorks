import AnimatedPages from "../../Components/AnimatedPages";

import happyWashVideo from "../../Assets/JobPageAssets/Videos/HappyWash_VIDEO.mp4";
import Header from "../../Components/Header";

function HappyWash() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <video
            src={happyWashVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Happy Wash.</b> Car owners aren’t huge fans of visiting
            car-washes, so we wrote a track encouraging them to do it for their
            car. <b>Client:</b> OTR | <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default HappyWash;
