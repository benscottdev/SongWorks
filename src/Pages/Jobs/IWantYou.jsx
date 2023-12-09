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
          <p>NEEDS COPY</p>
          <br />
          <p>Click the image to hear...</p>
        </div>
      </div>
      <audio ref={audioRef} src={iWantYouAudio} />
    </AnimatedPages>
  );
}

export default IWantYou;
