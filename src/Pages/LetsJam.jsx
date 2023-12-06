import AnimatedPages from "../Components/AnimatedPages";
import BackBtn from "../Components/BackBtn";

function LetsJam() {
  return (
    <AnimatedPages>
      <div className="letsJam">
        <BackBtn />
        <a href="mailto: benscott.dev@gmail.com">
          <h1>Send Email</h1>
        </a>
      </div>
    </AnimatedPages>
  );
}
export default LetsJam;
