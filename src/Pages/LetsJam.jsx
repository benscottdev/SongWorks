import AnimatedPages from "../Components/AnimatedPages";
import Header from "../Components/Header";
import instagramLogo from "../Assets/SW_instagramLogo.png";

function LetsJam() {
  return (
    <AnimatedPages>
      <Header />
      <div className="letsJam">
        <p>
          Hey, thanks for dropping by. Next steps, shoot us an email or give us
          a call and let's make some music together.
        </p>
        <a id="email" href="mailto: benscott.dev@gmail.com">
          <p>andyscott@songworks.com.au</p>
        </a>
        <br />
        <p>0439 617 955</p>

        <a href="https://www.instagram.com/thesongworks/" target="_blank">
          <img src={instagramLogo} alt="Instagram Link" rel="noreferrer" />
        </a>
      </div>
    </AnimatedPages>
  );
}
export default LetsJam;
