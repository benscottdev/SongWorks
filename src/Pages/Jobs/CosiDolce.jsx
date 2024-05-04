import AnimatedPages from "../../Components/AnimatedPages";
import CosiDolceVideo from "../../Assets/JobPageAssets/Videos/CosiDolce.mp4";
import Header from "../../Components/Header";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function CosiDolce() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/onhold">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={CosiDolceVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Così Dolce, Così Perversa.</b> If we'd been alive to soundtrack
            the credits for this 1969 Italian film Così Dolce, Così Perversa (So
            Sweet, So Perverse) it would have sounded like this.
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default CosiDolce;
