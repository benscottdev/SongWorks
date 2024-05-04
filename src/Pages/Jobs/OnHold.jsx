import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import onHold from "../../Assets/JobPageAssets/Videos/OnHold.mp4";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function OnHold() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/cosidolce">
          <NextPage />
        </Link>
        <Link to="/thegreenbin">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={onHold}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Showpony On Hold.</b> Clients have actually asked to be put back
            on hold to hear more of Showpony's Western inspired on hold message.
            <br />
            <br /> <b>Client:</b> Showpony Advertising
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default OnHold;
