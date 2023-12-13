import React, { useRef } from "react";
import AnimatedPages from "../../Components/AnimatedPages";
import iwantyou from "../../Assets/JobTiles/IWantYou.jpg";
import iWantYouAudio from "../../Assets/JobPageAssets/Audio/iWantYouAudio.mp3";
import Header from "../../Components/Header";
import NextPage from "../../Components/NextPage";
import PrevPage from "../../Components/PrevPage";
import { Link } from "react-router-dom";

function IWantYou() {
  const audioRef = useRef(null);

  const handleImageClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <AnimatedPages>
      <Header />
      <div className="jobAboutContainer">
        <Link to="/wikicamps">
          <NextPage />
        </Link>
        <Link to="/happywash">
          <PrevPage />
        </Link>
        <div className="jobAbout">
          <img
            style={{ cursor: "pointer" }}
            src={iwantyou}
            alt="iwantyouimage"
            onClick={handleImageClick}
          />
          <p>
            <b>Health Check</b> This was a track we created for an important
            health screening service. <br />
            <br />
            <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
      <audio ref={audioRef} src={iWantYouAudio} />
    </AnimatedPages>
  );
}

export default IWantYou;
