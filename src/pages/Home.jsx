import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import TempButtons from "../components/TempButtons";
import Process from "../components/Process";
import Showcase from "../components/ShowCase";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Process />
      <Showcase />
      <TempButtons />
    </>
  );
};

export default Home;
