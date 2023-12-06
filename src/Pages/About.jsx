import AnimatedPages from "../Components/AnimatedPages";
import BackBtn from "../Components/BackBtn";

function About() {
  return (
    <AnimatedPages>
      <div className="about">
        <BackBtn />

        <p>
          Words inspire action. Music inspires feeling. Be it a sparse,
          heartfelt soundtrack, or a wildly catchy jingle you’ll need surgically
          removed from your temporal lobe, music is one of the most powerful
          communication tools. Add humour, some rhythmic rhymes, or a
          beautifully crafted script, and what could have been a pretty ordinary
          execution becomes unforgettable, creating an emotional connection
          between people, stories, services or products. At <b>Songworks</b>,
          our musicians, writers and producers are dedicated to making
          outstanding commercial music your audience will feel and remember.
        </p>
      </div>
    </AnimatedPages>
  );
}
export default About;
