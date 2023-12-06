import AnimatedPages from "../../Components/AnimatedPages";
import BackBtn from "../../Components/BackBtn";

function QuitYourWay() {
  return (
    <AnimatedPages>
      <BackBtn />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <h1>Quit Your Way in May</h1>
          <h2>
            <b>Client:</b> SA Government
          </h2>
          <h2>
            <b>Agency:</b> Showpony
          </h2>
          <h2>
            <b>Credits:</b> Scott/Timms
          </h2>
          <br />
          <p>
            Write and produce a jingle for a radio and television campaign
            encouraging smokers to find their own way to give up cigarettes for
            the month of May.
          </p>
        </div>
        <img src="#" alt="Place Image Here" />
      </div>
    </AnimatedPages>
  );
}
export default QuitYourWay;
