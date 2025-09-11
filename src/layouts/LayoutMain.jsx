import React from "react";
import { Outlet } from "react-router";
import Nabvar from "../components/Nabvar";
import RespoNav from "../components/RespoNav";
import Footer from "../components/Footer";

const LayoutMain = () => {
  return (
    <>
      <Nabvar />
      <RespoNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutMain;
