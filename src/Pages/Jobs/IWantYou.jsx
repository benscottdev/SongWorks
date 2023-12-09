import React, { useRef } from "react";
import AnimatedPages from "../../Components/AnimatedPages";

import iwantyou from "../../Assets/JobTiles/IWantYou.jpg";
import iWantYouAudio from "../../Assets/JobPageAssets//Audio/iWantYouAudio.mp3";
import Header from "../../Components/Header";

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
        <div className="jobAbout">
          <img
            style={{ cursor: "pointer" }}
            src={iwantyou}
            alt="Place Image Here"
            onClick={handleImageClick}
          />
          <p>
            <b>Health Services Pitch.</b> While the campaign never went ahead,
            we pitched this track/concept to encourage a vulnerable cohort to
            get an important health test – if not for them, for the ones they
            love. The video was a tonal guide for pitch purposes only. <br />
            <b>Client:</b> SA Government | <b>Agency:</b> Showpony
          </p>
        </div>
      </div>
      <audio ref={audioRef} src={iWantYouAudio} />
    </AnimatedPages>
  );
}

export default IWantYou;
