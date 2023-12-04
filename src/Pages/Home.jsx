import Header from "../Components/Header";

import { motion } from "framer-motion";

function Home() {
  const jobsToDisplayArray = [
    {
      title: "Refresh Your Drive",
      client: "Motor Accident Commission",
      agency: "Clemenger",
      credits: "Scott/Timms",
      img: "imgSrc",
      brief:
        "Write a radio campaign encouraging drivers to take a 15 minute break when travelling long distances. We went back to the 70s and created a super-refreshing one minute soft drink style jingle.",
    },
    {
      title: "Stars of Summer",
      client: "Balfours Bakery",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: "imgSrc",
      brief:
        "Write and produce a suite of fun jingles for radio across different genres for the iconic bakery’s Stars of Summer campaign. This was for their iconic frog cake and won 4 AADC Awards.",
    },
    {
      title: "Foodland",
      client: "Foodland",
      agency: "KWP",
      credits: "Scott/Illingworth",
      img: "imgSrc",
      brief:
        "Write and produce a track for a television commercial that captures what this beloved independent franchise means to the people of South Australia.",
    },
    {
      title: "COTA",
      client: "COTA Travel Insurance",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: "imgSrc",
      brief:
        "Write and produce a song for a television commercial targeting over 60s. With a ridiculous idea from Showpony’s Creative Director we made this stupidly fun and catchy track for TV.",
    },
    {
      title: "Beaumont Tiles",
      client: "Beaumont Tiles",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: "imgSrc",
      brief:
        "Write and produce a signature jingle for ongoing radio and TV commercials.",
    },
    {
      title: "Laura Voicemail",
      client: "Private",
      img: "imgSrc",
      brief: "Write and produce a fun, personalised voicemail message.",
    },
    {
      title: "Quit Your Way in May",
      client: "SA Govt",
      agency: "Showpony",
      credits: "Scott/Timms",
      img: "imgSrc",
      brief:
        "Write and produce a jingle for a radio and television campaign encouraging smokers to find their own way to give up cigarettes for the month of May.",
    },
    {
      title: "Fantastic Noodles",
      client: "OTR",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: "imgSrc",
      brief: "",
    },

    {
      title: "Moe’s Hotdogs",
      client: "OTR",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: "imgSrc",
      brief: "",
    },

    {
      title: "Happy Wash, Happy Car",
      client: "OTR",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: "imgSrc",
      brief: "",
    },

    {
      title: "The Green Bin",
      client: "OTR",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: "imgSrc",
      brief: "",
    },
    {
      title: "Words Grow Minds",
      client: "The Raising Literacy Taskforce",
      agency: "Showpony",
      credits: "Scott/Illingworth",
      img: "imgSrc",
      brief: "",
    },
  ];

  return (
    <div className="homePage">
      <Header />
      {jobsToDisplayArray.map((item, index) => (
        <motion.div
          className="jobsToDisplay"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeIn",
            delay: 0.2 * index + 2.5,
            duration: 1,
          }}
        >
          <h1>{item.title}</h1>
          <p>Client: {item.client}</p>
          <p>Agency: {item.agency}</p>
          <p>Credits: {item.credits}</p>
        </motion.div>
      ))}
    </div>
  );
}
export default Home;
