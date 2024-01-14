import React from "react";
import Sidebar from "../sidebar";
import Topbar from "../topbar";
import Orderpage from "./orderpage";
const Order = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          <Orderpage />
        </div>
      </div>
    </>
  );
};
export default Order;
