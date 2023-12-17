import React from "react";
import AnimatedPages from "../../Components/AnimatedPages";
import happyWashVideo from "../../Assets/JobPageAssets/Videos/HealthPitch.mp4";
import Header from "../../Components/Header";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function IWantYou() {
  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/bigcheese">
          <NextPage />
        </Link>
        <Link to="/happywash">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <video
            preload="metadata"
            src={happyWashVideo}
            controls
            type="video/mp4"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
          <p>
            <b>Health Check</b> We created this emotive track for an important
            health screening service. (Video for pitch purposes only).
            <br />
            <br />
            <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
    </AnimatedPages>
  );
}

export default IWantYou;
