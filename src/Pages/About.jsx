import AnimatedPages from "../Components/AnimatedPages";
import BackBtn from "../Components/BackBtn";
import Header from "../Components/Header";

function About() {
  return (
    <AnimatedPages>
      <div className="about">
        <BackBtn />
        <Header />

        <p>
          An exhilarating soundtrack, an offbeat love song, a beautifully
          crafted script, or a wildly catchy jingle you’ll need surgically
          removed from your temporal lobe, Songworks creates outstanding
          commercial music audiences feel and remember.
        </p>
      </div>
    </AnimatedPages>
  );
}
export default About;
