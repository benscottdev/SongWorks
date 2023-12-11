import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPages from "../Components/AnimatedPages";
import landingVideo from "../Assets/SW_LandingVideo.mp4";
import landingGif from "../Assets/SW_Landing.gif";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <AnimatedPages>
      <div className="landingPage">
        {/* <video src={landingVideo} className="landingAnimation" autoPlay muted /> */}
        <img
          src={landingGif}
          alt="songworks-landing-gif"
          className="landingAnimation"
        />
      </div>
    </AnimatedPages>
  );
}

export default LandingPage;
