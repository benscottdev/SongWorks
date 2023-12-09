import AnimatedPages from "../../Components/AnimatedPages";
import cotaVideo from "../../Assets/JobPageAssets/Videos/Cota_VIDEO.mp4";
import Header from "../../Components/Header";

function Cota() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <video
            src={cotaVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>COTA Travel Insurance.</b> A ridiculous idea from Showpony’s
            Creative Director became an equally ridiculous TVC. <br />
            <b>Client:</b> COTA Travel Insurance | <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default Cota;
