import React from "react";
import { ReactComponent as Line44 } from "../assets/svg/Line 44.svg";
import Navbar from "./navbar";
import { ReactComponent as OvalIcon } from "../assets/svg/Oval.svg";
import { CardArray } from "./Screentwo";
import { useParams } from "react-router-dom";
const ScreenThree = () => {
  const list = CardArray;

  const { id,ticketQuantity,totalAmount } = useParams();

  const selectedCard = CardArray.find((card) => String(card.id) === id);

  return (
    <>
      <div className="text-white">
        <Navbar />
        <Line44 className="bg-primary w-full h-full" />
        <div className=" bg-Dark  p-10 flex">
          <h5 className="ml-10">
            Home/ Explore event / {selectedCard.title} /
          </h5>
          <button className="text-Red"> Checkout</button>
        </div>
        <div className="bg-primary p-20">
          <h1 className="font-bold text-xl">Order Confirmation</h1>
          <Line44 className="mt-10" />
          <div className="flex gap-10">
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
            <div className="bg-Dark mt-20 rounded-md">
              <div className="p-10 ">
                <h1 className="font-bold text-3xl">Checkout Summary</h1>
                <Line44 className="bg-primary w-[350px] mt-7" />
                <h1 className="mt-5">{selectedCard.title}</h1>
                <div className="flex gap-2 mt-2">
                  <h3> {selectedCard.buttonText}</h3>
                  <OvalIcon className="mt-3" />
                  <h3 className=""> {selectedCard.location}</h3>
                </div>
                <Line44 className="bg-primary w-[350px] mt-7" />
                <div className="mt-2 flex justify-between">
                  <h1>Normal</h1>
                  <h1>{ticketQuantity}x</h1>
                  <h1>$500.00</h1>
                </div>
                <div className="mt-2 flex justify-between">
                  <h1>Sub Total</h1>
                  <h1>{totalAmount}</h1>
                </div>
                <div className="mt-2 flex justify-between">
                  <h1>Tax( 13 % )</h1>
                  <h1>$130</h1>
                </div>
                <div className="mt-2 flex justify-between">
                  <h1>Discount ( 0 % )</h1>
                  <h1>$0</h1>
                </div>
                <Line44 className="bg-primary w-[350px] mt-7" />
                <div className="mt-2 flex justify-between">
                  <h1>Total</h1>
                  <div className="gap-3 flex">
                    <h6 className="mt-1">USD</h6>
                    <h1 className="font-bold text-2xl">1130.00</h1>
                  </div>
                </div>
                <Line44 className="bg-primary w-[350px] mt-7" />
                <div className="mt-5">
                  <button className="bg-Red p-4 w-[100%] rounded-md">
                    Confirm & pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScreenThree;