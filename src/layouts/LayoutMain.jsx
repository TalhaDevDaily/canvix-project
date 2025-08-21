import React from "react";
import { Outlet } from "react-router";
import Nabvar from "../components/Nabvar";

const LayoutMain = () => {
  return (
    <>
      <Nabvar />
      <Outlet />
    </>
  );
};

export default LayoutMain;
