import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import sunflowerVideo from "../../Assets/JobPageAssets/Videos/Sunflowers.mp4";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function Sunflower() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/wikicamps">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={sunflowerVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Sunflowers at Virginia</b> Inspired by fast-growing, golden
            Sunflowers, this new property development needed a bright and
            optimistic brand identity. As part of their look and feel we created
            this track for radio and on-hold. <br />
            <br /> <b>Client:</b> Property People <br />
            <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default Sunflower;
