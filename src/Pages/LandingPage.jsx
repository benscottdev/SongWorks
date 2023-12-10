import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPages from "../Components/AnimatedPages";
import landingVideo from "../Assets/SW_LandingVideo.mp4";

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
        <video src={landingVideo} className="landingAnimation" autoPlay muted />
      </div>
    </AnimatedPages>
  );
}

export default LandingPage;
