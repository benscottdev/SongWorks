import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import moesVideo from "../../Assets/JobPageAssets/Videos/GoAMoes_VIDEO.mp4";

function Moes() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <video
            src={moesVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Moe’s Hotdogs.</b> Winning 3 coveted Effie Awards, this jingle
            formed the basis of a wildly successful hot dog campaign for an
            Australian convenience chain. <b>Client:</b> OTR <br />{" "}
            <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default Moes;
