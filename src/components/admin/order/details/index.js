import React from "react";
import Sidebar from "../../sidebar";
import Topbar from "../../topbar";
import Detailspage from "./details";
const Details = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          <Detailspage />
        </div>
      </div>
    </>
  );
};
export default Details;
