import AnimatedPages from "../../Components/AnimatedPages";
import BackBtn from "../../Components/BackBtn";
import fantasticNoodlesVideo from "../../Assets/JobPageAssets/YTTC_H264.mp4";

function FantasticNoodles() {
  return (
    <AnimatedPages>
      <BackBtn />
      <div className="jobAboutContainer">
        <div className="jobAbout">
          <h1>Fantastic Noodles</h1>
          <h2>
            <b>Client:</b> San Remo
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
        <video
          src={fantasticNoodlesVideo}
          controls
          type="video/mp4"
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
        />
      </div>
    </AnimatedPages>
  );
}
export default FantasticNoodles;
