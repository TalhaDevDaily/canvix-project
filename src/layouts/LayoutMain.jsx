import React from "react";
import { Outlet } from "react-router";
import Nabvar from "../components/Nabvar";
import RespoNav from "../components/RespoNav";

const LayoutMain = () => {
  return (
    <>
      <Nabvar />
      <RespoNav />
      <Outlet />
    </>
  );
};

export default LayoutMain;
