import AnimatedPages from "../../Components/AnimatedPages";

import foodlandVideo from "../../Assets/JobPageAssets/Videos/Foodland_VIDEO.mp4";
import Header from "../../Components/Header";

function Foodland() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <video
            preload="metadata"
            src={foodlandVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Foodland.</b> A pitch-winning track that tells the story of
            Foodland’s commitment to provide the people of South Australia with
            great, homegrown produce. <b>Client:</b> Foodland <br />{" "}
            <b>Agency:</b> KWP
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default Foodland;
