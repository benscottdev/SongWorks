import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import wikiCamps from "../../Assets/JobPageAssets/Videos/WikiCamps.mp4";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function Wikicamps() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/cookiebutter">
          <PrevPage />
        </Link>
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
