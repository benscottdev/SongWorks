import AnimatedPages from "../../Components/AnimatedPages";
import foodlandVideo from "../../Assets/JobPageAssets/Videos/Foodland.mp4";
import Header from "../../Components/Header";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function Foodland() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/starsofsummer">
          <NextPage />
        </Link>
        <Link to="/cota">
          <PrevPage />
        </Link>
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
            great, homegrown produce. <br />
            <br /> <b>Client:</b> Foodland <br /> <b>Agency:</b> KWPX
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default Foodland;
