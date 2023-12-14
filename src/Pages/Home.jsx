import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedPages from "../Components/AnimatedPages";
// IMAGE IMPORTS BELOW
import cota from "../Assets/JobTiles/COTA.jpg";
import fantastic from "../Assets/JobTiles/FantasticNoodles.jpg";
import foodland from "../Assets/JobTiles/Foodland.jpg";
import happyWash from "../Assets/JobTiles/HappyWash.jpg";
import moesHotdogs from "../Assets/JobTiles/MoesHotdogs.jpg";
import quitYourWay from "../Assets/JobTiles/QuitYourWayInMay.jpg";
import refreshYourDrive from "../Assets/JobTiles/RefreshYourDrive.jpg";
import starsOfSummer from "../Assets/JobTiles/StarsOfSummer.jpg";
import theGreenBin from "../Assets/JobTiles/TheGreenBin.jpg";
import wordsGrowMinds from "../Assets/JobTiles/WordsGrowMinds.jpg";
import healthCheck from "../Assets/JobTiles/IWantYou.jpg";
import wikiCamps from "../Assets/JobTiles/Wikicamps.jpg";
import cookieButter from "../Assets/JobTiles/CookieButter.jpg";
import bigCheese from "../Assets/JobTiles/BigCheese.jpg";

function Home() {
  const jobsToDisplayArray = [
    {
      title: "Moe’s Hotdogs",
      client: "OTR",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: moesHotdogs,
      link: "/moes",
    },
    {
      title: "Words Grow Minds",
      client: "The Raising Literacy Taskforce",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: wordsGrowMinds,
      link: "/wordsgrowminds",
    },
    {
      title: "Quit Your Way in May",
      client: "SA Govt",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: quitYourWay,
      link: "/quityourway",
    },
    {
      title: "Refresh Your Drive",
      client: "Motor Accident Commission",
      agency: "Clemenger",
      credits: "Scott/Timms",
      img: refreshYourDrive,
      link: "/refreshyourdrive",
    },
    {
      title: "The Green Bin",
      client: "Green Industries",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: theGreenBin,
      link: "/thegreenbin",
    },
    {
      title: "COTA Travel Insurance",
      client: "COTA Travel Insurance",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: cota,
      link: "/cota",
    },
    {
      title: "Foodland",
      client: "Foodland",
      agency: "KWP",
      credits: "Scott/Illingworth",
      img: foodland,
      link: "/foodland",
    },
    {
      title: "Stars of Summer",
      client: "Balfours Bakery",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: starsOfSummer,
      link: "/starsofsummer",
    },
    {
      title: "Fantastic Noodles",
      client: "San Remo",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: fantastic,
      link: "/fantasticnoodles",
    },
    {
      title: "Happy Wash, Happy Car",
      client: "OTR",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: happyWash,
      link: "/happywash",
    },
    {
      title: "Health Check",
      client: "SA Govt",
      agency: "Showpony",
      img: healthCheck,
      link: "/healthCheck",
    },
    {
      title: "Big Cheese",
      client: "San Remo",
      agency: "Showpony",
      img: bigCheese,
      link: "/bigcheese",
    },
    {
      title: "Cookie Butter",
      client: "San Churro",
      agency: "Showpony",
      img: cookieButter,
      link: "/cookiebutter",
    },
    {
      title: "Wikicamps",
      client: "Wikicamps",
      agency: "Showpony",
      img: wikiCamps,
      link: "/wikicamps",
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  const handleOffHover = () => {
    setHoveredItem(null);
  };

  return (
    <AnimatedPages>
      <div className="homePage">
        <Header />
        {jobsToDisplayArray.map((item, index) => (
          <Link to={item.link}>
            <motion.div
              className="jobsToDisplay"
              id="jobsToDisplay"
              key={index}
              onMouseEnter={() => {
                handleHover(index);
              }}
              onMouseLeave={handleOffHover}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeIn",
                delay: 0.1 * index + 0.2,
                duration: 1,
              }}
              style={{
                backgroundColor: "black",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: hoveredItem === index ? 0.2 : 1,
              }}
            >
              <img
                alt={item.title}
                src={item.img}
                style={{ opacity: hoveredItem === index ? 0.2 : 1 }}
              />

              {hoveredItem === index && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: "white" }}
                >
                  {item.title}
                </motion.h1>
              )}
            </motion.div>
          </Link>
        ))}
      </div>
    </AnimatedPages>
  );
}
export default Home;
