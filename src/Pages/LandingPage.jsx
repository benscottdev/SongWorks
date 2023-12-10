import AnimatedPages from "../Components/AnimatedPages";
import landingVideo from "../Assets/SW_LandingVideo.mp4";

function LandingPage() {
  if (window.location.pathname === "/") {
    setTimeout(function() {
      window.location.replace("/home");
    }, 5000);
  } else {
  }

  return (
    <AnimatedPages>
      <div className="landingPage">
        <video src={landingVideo} className="landingAnimation" autoPlay muted />
      </div>
    </AnimatedPages>
  );
}
export default LandingPage;
