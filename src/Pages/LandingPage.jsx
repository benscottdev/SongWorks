import { useNavigate } from "react-router-dom";
import AnimatedPages from "../Components/AnimatedPages";
import landingGif from "../Assets/SW_Landing.gif";

function LandingPage() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 5500);

  return (
    <AnimatedPages>
      <div className="landingPage">
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
