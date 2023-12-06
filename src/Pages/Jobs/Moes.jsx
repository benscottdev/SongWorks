import AnimatedPages from "../../Components/AnimatedPages";
import BackBtn from "../../Components/BackBtn";

function Moes() {
  return (
    <AnimatedPages>
      <BackBtn />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <h1>Moe's Hotdogs</h1>
          <h2>
            <b>Client:</b> OTR
          </h2>
          <h2>
            <b>Agency:</b>
          </h2>
          <h2>
            <b>Credits:</b> Scott/Illingworth
          </h2>
          <br />
          <p></p>
        </div>
        <img src="#" alt="Place Image Here" />
      </div>
    </AnimatedPages>
  );
}
export default Moes;
