import AnimatedPages from "../Components/AnimatedPages";
import Header from "../Components/Header";
import instagramLogo from "../Assets/SW_instagramLogo.png";

function LetsJam() {
  return (
    <AnimatedPages>
      <Header />
      <div className="letsJam">
        <p>
          Thanks for dropping by. We’re based in Adelaide, South Australia. If
          you’re nearby, let’s grab a coffee. If you’re further afield, shoot us
          an email or give us a call and let’s get something started.
        </p>
        <a id="email" href="mailto: benscott.dev@gmail.com">
          <p>andyscott@songworks.com.au</p>
        </a>
        <div>
          <p>0439 617 955 </p>
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
