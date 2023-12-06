import AnimatedPages from "../../Components/AnimatedPages";
import BackBtn from "../../Components/BackBtn";

function RefreshYourDrive() {
  return (
    <AnimatedPages>
      <BackBtn />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <h1>Refresh Your Drive</h1>
          <h2>
            <b>Client:</b> Motor Accident Commission
          </h2>
          <h2>
            <b>Agency:</b> Clemenger
          </h2>
          <h2>
            <b>Credits:</b> Scott/Timms
          </h2>
          <br />
          <p>
            Write a radio campaign encouraging drivers to take a 15 minute break
            when travelling long distances. We went back to the 70s and created
            a super-refreshing one minute soft drink style jingle.
          </p>
        </div>
        <img src="#" alt="Place Image Here" />
      </div>
    </AnimatedPages>
  );
}
export default RefreshYourDrive;
