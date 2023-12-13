import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import wordsGrowMindsVideo from "../../Assets/JobPageAssets/Videos/WordsGrowMinds.mp4";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function WordsGrowMinds() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/quityourway">
          <NextPage />
        </Link>
        <Link to="/moes">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={wordsGrowMindsVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Words Grow Minds.</b> Beautifully animated, this track forms the
            basis of a wider campaign encouraging parents to engage more with
            their babies and help grow their minds. <br />
            <br />
            <b>Client:</b> Early Years Taskforce <br /> <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default WordsGrowMinds;
