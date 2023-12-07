import AnimatedPages from "../../Components/AnimatedPages";
import BackBtn from "../../Components/BackBtn";

function TheGreenBin() {
  return (
    <AnimatedPages>
      <BackBtn />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <h1>The Green Bin</h1>
          <h2>
            <b>Client:</b> Green Industries
          </h2>
          <h2>
            <b>Agency:</b>
          </h2>
          <h2>
            <b>Credits:</b> Scott/Illingworth
          </h2>
          <br />
          <p>
            Green Industries needed to make a complicated, forgettable message
            one that people would remember as they weighed up what goes in the
            green bin.
          </p>
        </div>
        <img src="#" alt="Place Image Here" />
      </div>
    </AnimatedPages>
  );
}
export default TheGreenBin;
