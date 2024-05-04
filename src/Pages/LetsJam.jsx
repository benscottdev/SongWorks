import AnimatedPages from "../Components/AnimatedPages";
import Header from "../Components/Header";
import instagramLogo from "../Assets/SW_instagramLogo.png";

function LetsJam() {
  return (
    <AnimatedPages>
      <Header />
      <div className="letsJam">
        <p>
          Thanks for dropping by. We’re based in Adelaide, <br /> South
          Australia. If you’re nearby, let’s grab a coffee. <br /> If you’re
          from further afield, shoot us an email or <br />
          give us a call and let’s get something started.
        </p>
        <br />
        <a id="email" href="mailto: andyscott@songworks.com.au">
          <p>andyscott@songworks.com.au</p>
        </a>
        <div>
          <a href="tel:+610498095622">
            <p>0439 617 955 </p>
          </a>
          <a
            href="https://www.instagram.com/thesongworks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} id="instagramLink" alt="instagram-link" />
          </a>
        </div>
      </div>
    </AnimatedPages>
  );
}
export default LetsJam;
