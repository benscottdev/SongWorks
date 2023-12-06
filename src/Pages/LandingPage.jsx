import { Link } from "react-router-dom";
import AnimatedPages from "../Components/AnimatedPages";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <AnimatedPages>
      <div className="landingPage">
        <motion.video src={""} className="landingAnimation" autoPlay muted />
        {/* Below is in it's own motion.div so I can 
        make it appear after the animation has run */}
        <motion.div className="explore">
          <Link className="exploreBtn" to="/home">
            explore
          </Link>
        </motion.div>
      </div>
    </AnimatedPages>
  );
}
export default LandingPage;
