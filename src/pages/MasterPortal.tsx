import React from "react";
import Navbar from "../components/Navbar";
import MasterLayout from "../components/MasterLayout";

const MasterPortal = () => {
  return (
    <>
      <Navbar showSearch={"off"} />
      <MasterLayout />
    </>
  );
};

export default MasterPortal;
