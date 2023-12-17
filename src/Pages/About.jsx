import AnimatedPages from "../Components/AnimatedPages";

import Header from "../Components/Header";

function About() {
  return (
    <AnimatedPages>
      <div className="about">
        <Header />

        <p>
          We love making music. We’re in awe of its power to change hearts and
          minds, to move, entertain and inspire audiences like nothing else can.
          For 20 years, we've been creating award-winning commercial music
          people feel and remember – wildly catchy jingles, exhilarating
          soundtracks, offbeat love songs, on-hold music people call just to
          hear… "no seriously, put me back on hold." <br />
          <br />
          While we have a small core team of writers, musicians and producers,
          we’ll bring in whoever or whatever we need to <br />
          make the song work.
        </p>
      </div>
    </AnimatedPages>
  );
}
export default About;
