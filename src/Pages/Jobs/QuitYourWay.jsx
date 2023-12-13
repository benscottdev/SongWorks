import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import quitYourWayVideo from "../../Assets/JobPageAssets/Videos/QuitYourWay.mp4";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function QuitYourWay() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/refreshyourdrive">
          <NextPage />
        </Link>
        <Link to="/wordsgrowminds">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={quitYourWayVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Quit Your Way in May.</b> Drug and Alcohol Services needed a way
            to encourage smokers <br />
            to give up cigarettes during their ‘Quit Your Way In May’ campaign.{" "}
            <br />
            <br />
            <b> Client:</b> SA Govt <br /> <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default QuitYourWay;
