import AnimatedPages from "../../Components/AnimatedPages";
import Header from "../../Components/Header";
import starsOfSummerVideo from "../../Assets/JobPageAssets/Videos/StarsOfSummer_VIDEO.mp4";

function StarsOfSummer() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <video
            preload="metadata"
            src={starsOfSummerVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Stars of Summer.</b> Promoting their iconic frog cake, this was
            one of 4 radio jingles we made for the Balfours Bakery ‘Stars of
            Summer’ campaign. <b>Client:</b> Balfours Bakery <br />
            <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default StarsOfSummer;
