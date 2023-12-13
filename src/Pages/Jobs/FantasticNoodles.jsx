import AnimatedPages from "../../Components/AnimatedPages";
import fantasticNoodlesVideo from "../../Assets/JobPageAssets/Videos/YupToTheCup.mp4";
import Header from "../../Components/Header";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function FantasticNoodles() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/happywash">
          <NextPage />
        </Link>
        <Link to="/starsofsummer">
          <PrevPage />
        </Link>
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
            Noodles ownership of the crowded cup noodle category. <br />
            <br />
            <b>Client:</b> San Remo
            <br /> <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default FantasticNoodles;
