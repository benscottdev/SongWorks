import AnimatedPages from "../Components/AnimatedPages";
import BackBtn from "../Components/BackBtn";

function About() {
  return (
    <AnimatedPages>
      <div className="about">
        <BackBtn />

        <p>
          Music is one of the most powerful communication tools available. Be it
          an exhilarating soundtrack, an offbeat love song, a beautifully
          crafted script, or a wildly catchy jingle you’ll need surgically
          removed from your temporal lobe, <b>Songworks</b> creates outstanding
          commercial music your audience will feel and remember.
        </p>
      </div>
    </AnimatedPages>
  );
}
export default About;
