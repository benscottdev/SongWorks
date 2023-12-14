import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPages from "../Components/AnimatedPages";
import landingGif from "../Assets/SW_Landing.gif";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 5500);

    // Cleanup the timeout in case the component unmounts before the timeout
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <AnimatedPages>
      <div className="landingPage">
        <img
          onClick={() => {
            navigate("/home");
          }}
          src={landingGif}
          alt="songworks-landing-gif"
          className="landingAnimation"
        />
      </div>
    </AnimatedPages>
  );
}

export default LandingPage;
