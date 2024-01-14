import React from "react";
import Sidebar from "../sidebar";
import Topbar from "../topbar";
import Userpage from "./userpage";
const User = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          <Userpage />
        </div>
      </div>
    </>
  );
};
export default User;
