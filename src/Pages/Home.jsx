import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { motion, useTime } from "framer-motion";
import { useState, useRef } from "react";
import AnimatedPages from "../Components/AnimatedPages";
// IMAGE IMPORTS BELOW
import cota from "../Assets/JobTiles/COTA.png";
import fantastic from "../Assets/JobTiles/FantasticNoodles.png";
import foodland from "../Assets/JobTiles/Foodland.png";
import happyWash from "../Assets/JobTiles/HappyWash.png";
import moesHotdogs from "../Assets/JobTiles/MoesHotdogs.png";
import quitYourWay from "../Assets/JobTiles/QuitYourWayInMay.png";
import refreshYourDrive from "../Assets/JobTiles/RefreshYourDrive.png";
import starsOfSummer from "../Assets/JobTiles/StarsOfSummer.png";
import theGreenBin from "../Assets/JobTiles/TheGreenBin.png";
import wordsGrowMinds from "../Assets/JobTiles/WordsGrowMinds.png";
import arrow from "../Assets/arrow.png";

function Home() {
  const jobsToDisplayArray = [
    {
      title: "Refresh Your Drive",
      client: "Motor Accident Commission",
      agency: "Clemenger",
      credits: "Scott/Timms",
      img: refreshYourDrive,
      brief:
        "Write a radio campaign encouraging drivers to take a 15 minute break when travelling long distances. We went back to the 70s and created a super-refreshing one minute soft drink style jingle.",
      link: "/refreshyourdrive",
    },
    {
      title: "Stars of Summer",
      client: "Balfours Bakery",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: starsOfSummer,
      brief:
        "Write and produce a suite of fun jingles for radio across different genres for the iconic bakery’s Stars of Summer campaign. This was for their iconic frog cake and won 4 AADC Awards.",
      link: "/starsofsummer",
    },
    {
      title: "Foodland",
      client: "Foodland",
      agency: "KWP",
      credits: "Scott/Illingworth",
      img: foodland,
      brief:
        "Write and produce a track for a television commercial that captures what this beloved independent franchise means to the people of South Australia.",
      link: "/foodland",
    },
    {
      title: "COTA Travel Insurance",
      client: "COTA Travel Insurance",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: cota,
      brief:
        "Write and produce a song for a television commercial targeting over 60s. With a ridiculous idea from Showpony’s Creative Director we made this stupidly fun and catchy track for TV.",
      link: "/cota",
    },
    // {
    //   title: "Beaumont Tiles",
    //   client: "Beaumont Tiles",
    //   agency: "Showpony",
    //   credits: "Scott/Timms",
    //   img: "imgSrc",
    //   brief:
    //     "Write and produce a signature jingle for ongoing radio and TV commercials.",
    //   link: "/beaumonr",
    // },
    // {
    //   title: "Laura Voicemail",
    //   client: "Private",
    //   img: "imgSrc",
    //   brief: "Write and produce a fun, personalised voicemail message.",
    //   link: "/laura",
    // },
    {
      title: "Quit Your Way in May",
      client: "SA Govt",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: quitYourWay,
      brief:
        "Write and produce a jingle for a radio and television campaign encouraging smokers to find their own way to give up cigarettes for the month of May.",
      link: "/quityourway",
    },
    {
      title: "Fantastic Noodles",
      client: "San Remo",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: fantastic,
      brief: "",
      link: "/fantasticnoodles",
    },

    {
      title: "Moe’s Hotdogs",
      client: "OTR",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: moesHotdogs,
      brief: "",
      link: "/moes",
    },

    {
      title: "Happy Wash, Happy Car",
      client: "OTR",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: happyWash,
      brief: "",
      link: "/happywash",
    },

    {
      title: "The Green Bin",
      client: "OTR",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: theGreenBin,
      brief: "",
      link: "/thegreenbin",
    },
    {
      title: "Words Grow Minds",
      client: "The Raising Literacy Taskforce",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: wordsGrowMinds,
      brief: "",
      link: "/wordsgrowminds",
    },
  ];
  const scrollRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  const handleOffHover = () => {
    setHoveredItem(null);
  };

  return (
    <AnimatedPages>
      <div className="about">
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
      <div className="scroll">
        {/* <h1 className="scrollDown">Scroll Down...</h1> */}
        <a href="#jobsToDisplay">
          <img src={arrow} alt="" />
        </a>
      </div>
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
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "easeIn",
                delay: 0.1 * index,
                duration: 1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={item.img} alt="" />
              {hoveredItem === index && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
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
