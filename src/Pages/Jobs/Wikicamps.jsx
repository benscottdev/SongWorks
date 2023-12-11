import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import wikiCamps from "../../Assets/JobPageAssets/Videos/WikiCamps_VIDEO.mp4";

function Wikicamps() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <video
            preload="metadata"
            src={wikiCamps}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Wikicamps.</b> Written for international camp info site
            Wikicamps, we brought some acoustic campfire comfort to this
            feel-good sting. <br />
            <br />
            <b>Client:</b> Wikicamps <br /> <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default Wikicamps;
