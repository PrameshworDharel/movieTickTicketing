import React from "react";
import Navbar from "./navbar";
import Homepage from "../components/homepage";
const Screen1 = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <Homepage />
    </>
  );
};
export default Screen1;
