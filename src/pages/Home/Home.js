import React from "react";
import Banner from "./Banner";
import Importance from "./Importance";
import About from "./About";
import Experience from "./Experience";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Experience></Experience>
      <About></About>
      <Importance></Importance>
    </div>
  );
};

export default Home;
