import AnimatedPages from "../../Components/AnimatedPages";
import BackBtn from "../../Components/BackBtn";

function Foodland() {
  return (
    <AnimatedPages>
      <BackBtn />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <h1>Foodland</h1>
          <h2>
            <b>Client:</b> Foodland
          </h2>
          <h2>
            <b>Agency:</b> KWP
          </h2>
          <h2>
            <b>Credits:</b> Scott/Illingworth
          </h2>
          <br />
          <p>
            Write and produce a track for a television commercial that captures
            what this beloved independent franchise means to the people of South
            Australia.
          </p>
        </div>
        <img src="#" alt="Place Image Here" />
      </div>
    </AnimatedPages>
  );
}
export default Foodland;
