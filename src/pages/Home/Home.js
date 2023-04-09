import React from "react";
import Banner from "./Banner";
import Importance from "./Importance";
import About from "./About";
import MyMarquee from "./Marquee";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MyMarquee></MyMarquee>
      <About></About>
      <Importance></Importance>
    </div>
  );
};

export default Home;
