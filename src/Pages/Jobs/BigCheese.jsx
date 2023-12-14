import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import bigCheeseVideo from "../../Assets/JobPageAssets/Videos/BigCheese.mp4";

function BigCheese() {
  return (
    <AnimatedPages>
      <Header />

      <div className="jobAboutContainer">
        <Link to="/cookiebutter">
          <NextPage />
        </Link>
        <Link to="/healthcheck">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={bigCheeseVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Big Cheese.</b> When San Remo launched their bigger, cheesier
            brand of mac & cheese, there was only one song big enough to express
            its awesome bigness.
            <br />
            <br />
            <b>Client:</b> San Remo <br /> <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default BigCheese;
