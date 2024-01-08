import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

const Adminpage = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <Topbar />
        </div>
      </div>
    </>
  );
};
export default Adminpage;
