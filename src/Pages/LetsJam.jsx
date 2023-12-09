import AnimatedPages from "../Components/AnimatedPages";
import Header from "../Components/Header";

function LetsJam() {
  return (
    <AnimatedPages>
      <Header />
      <div className="letsJam">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet suscipit urna, ut egestas velit. Etiam dictum felis sed nisl
          tincidunt, vel viverra augue tristique. Duis rhoncus gravida aliquam.
          Proin sit amet fringilla nibh. Curabitur egestas nulla nec enim
          aliquam, nec semper orci placerat. Morbi ornare non magna vel gravida.
          Quisque iaculis eget sem sed convallis. Donec eget finibus enim.
        </p>
        <a id="email" href="mailto: benscott.dev@gmail.com">
          <p>andyscott@songworks.com.au</p>
        </a>
      </div>
    </AnimatedPages>
  );
}
export default LetsJam;
