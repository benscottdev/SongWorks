import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import quitYourWayVideo from "../../Assets/JobPageAssets/Videos/QuitYourWay_VIDEO.mp4";

function QuitYourWay() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
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
            to encourage smokers to give up cigarettes during their ‘Quit Your
            Way In May’ campaign. <br />
            <b>Client:</b> SA Govt | <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default QuitYourWay;
