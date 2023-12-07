import React, { useRef } from "react";
import AnimatedPages from "../../Components/AnimatedPages";
import BackBtn from "../../Components/BackBtn";
import iwantyou from "../../Assets/JobTiles/IWantYou.png";
import iWantYouAudio from "../../Assets/JobPageAssets/iWantYouAudio.mp3";

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
      <BackBtn />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <h1>Pitch Track</h1>
          <h2>
            <b>Client:</b> SA Government
          </h2>
          <h2>
            <b>Agency:</b> Showpony
          </h2>
          <br />
          <p>
            We created this track for an emotive video, raising awareness of an
            important government health service. It never made it to air, so if
            anyone can use it for something, sing out.
          </p>
        </div>
        <img
          style={{ cursor: "pointer" }}
          src={iwantyou}
          alt="Place Image Here"
          onClick={handleImageClick}
        />
      </div>
      <audio ref={audioRef} src={iWantYouAudio} />
    </AnimatedPages>
  );
}

export default IWantYou;
