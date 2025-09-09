import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import TempButtons from "../components/TempButtons";
import Process from "../components/Process";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Process />
      <TempButtons />
    </>
  );
};

export default Home;
