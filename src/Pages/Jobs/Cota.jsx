import AnimatedPages from "../../Components/AnimatedPages";
import BackBtn from "../../Components/BackBtn";

function Cota() {
  return (
    <AnimatedPages>
      <BackBtn />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <h1>COTA</h1>
          <h2>
            <b>Client:</b> COTA Travel Insurance
          </h2>
          <h2>
            <b>Agency:</b> Showpony
          </h2>
          <h2>
            <b>Credits:</b> Scott/Timms
          </h2>
          <br />
          <p>
            Write and produce a song for a television commercial targeting over
            60s. With a ridiculous idea from Showpony’s Creative Director we
            made this stupidly fun and catchy track for TV.{" "}
          </p>
        </div>
        <img src="#" alt="Place Image Here" />
      </div>
    </AnimatedPages>
  );
}
export default Cota;
