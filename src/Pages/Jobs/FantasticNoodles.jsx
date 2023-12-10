import AnimatedPages from "../../Components/AnimatedPages";
import fantasticNoodlesVideo from "../../Assets/JobPageAssets/Videos/YupToTheCup_VIDEO.mp4";
import Header from "../../Components/Header";

function FantasticNoodles() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <video
            preload="metadata"
            src={fantasticNoodlesVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Fantastic Cup Noodles.</b> This wacky track gave Fantastic
            Noodles ownership of the crowded cup noodle category. <b>Client:</b>{" "}
            San Remo | <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default FantasticNoodles;