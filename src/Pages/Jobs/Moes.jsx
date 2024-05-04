import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import moesVideo from "../../Assets/JobPageAssets/Videos/GoAMoes.mp4";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function Moes() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/foodland">
          <NextPage />
        </Link>
        <Link to="/southauspolice">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={moesVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Moe’s Hotdogs.</b> Winning 3 coveted Effie Awards, this jingle
            formed the basis of a wildly successful hot dog campaign for an
            Australian convenience chain. <br />
            <br /> <b>Client:</b> OTR <br /> <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default Moes;
