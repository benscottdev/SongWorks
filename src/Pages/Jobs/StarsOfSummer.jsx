import AnimatedPages from "../../Components/AnimatedPages";
import BackBtn from "../../Components/BackBtn";

function StarsOfSummer() {
  return (
    <AnimatedPages>
      <BackBtn />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <h1>Stars of Summer</h1>
          <br />
          <h2>
            <b>Client:</b> Balfours Bakery
          </h2>
          <h2>
            <b>Agency:</b> Showpony
          </h2>
          <h2>
            <b>Credits:</b> Scott/Timms
          </h2>
          <br />
          <p>
            Write and produce a suite of fun jingles for radio across different
            genres for the iconic bakery’s Stars of Summer campaign. This was
            for their iconic frog cake and won 4 AADC Awards.
          </p>
        </div>
        <img src="#" alt="Place Image Here" />
      </div>
    </AnimatedPages>
  );
}
export default StarsOfSummer;
