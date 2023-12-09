import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import wordsGrowMindsVideo from "../../Assets/JobPageAssets/Videos/WordsGrowMinds_VIDEO.mp4";

function WordsGrowMinds() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <video
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
            <b>Client:</b> The Early Years Taskforce | <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default WordsGrowMinds;
