import React, { useState } from "react";
import { ReactComponent as Line44 } from "../assets/svg/Line 44.svg";
import Navbar from "./navbar";
const ScreenThree = () => {
  return (
    <>
      <div className="text-white">
        <Navbar />
        <Line44 className="bg-primary w-full h-full" />
        <div className=" bg-Dark  p-10 flex">
          <h5 className="ml-10">
            Home/ Explore event / Golden night with Dong /
          </h5>
          <button className="text-Red"> Checkout</button>
        </div>
        <div className="bg-primary p-20">
          <h1 className="font-bold text-xl">Order Confirmation</h1>
          <Line44 className="mt-10" />
          <div className="flex">
            <form className="bg-Dark p-10 mt-20 rounded-md">
              <h1 className="font-bold text-xl">Information</h1>
              <div className="mt-10">
                <label htmlFor="fullName">Full Name</label>
                <div>
                  <input
                    className="w-full mt-2 h-10  bg-primary shadow-2xl rounded-md"
                    type="text"
                    id="fullName"
                    name="fullName"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="mt-5">
                  <label htmlFor="email">Email*</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="mt-5 ml-20">
                  <label htmlFor="address">Address*</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10   bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="address"
                      name="address"
                    />
                  </div>
                </div>
              </div>
              <div className="flex ">
                <div className="mt-5">
                  <label htmlFor="country">Country*</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="country"
                      name="country"
                    />
                  </div>
                </div>
                <div className=" mt-5 ml-20">
                  <label htmlFor="state">State</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="state"
                      name="state"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="mt-5">
                  <label htmlFor="city">City</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="city"
                      name="city"
                    />
                  </div>
                </div>
                <div className="mt-5 ml-20">
                  <label htmlFor="zipCode">Zip/Post Code*</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="zipCode"
                      name="zipCode"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div>
                
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default ScreenThree;
