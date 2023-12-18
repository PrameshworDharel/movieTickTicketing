import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import * as images from "../assets/images";
import { ReactComponent as OvalIcon } from "../assets/svg/Oval.svg";
import { ReactComponent as Line } from "../assets/svg/Line 3.svg";
import { ReactComponent as Vector } from "../assets/svg/vector11.svg";
import { ReactComponent as Location } from "../assets/svg/Vector12.svg";

export const CardArray = [
  {
    id: 1,
    image: images.Rectangle1,
    title: "Golden Night with Laure & Dong",
    date: "August 28, 2023",
    location: "Kathmandu, Nepal",
    buttonText: "Concert",
  },
  {
    id: 2,
    image: images.Rectangle2,
    title: "The Weeknd Experience: Live with The Weeknd",
    date: "January 21, 2023",
    location: "Kathmandu, Nepal",
    buttonText: "Concert",
  },
  {
    id: 3,
    image: images.Rectangle3,
    title: "Antman and the wasp Quantumania",
    date: "August 28, 2023",
    location: "Kathmandu, Nepal",
    buttonText: "Movies",
  },
];

const ScreenTwo = () => {
  const { eventId } = useParams();

  const selectedCard = CardArray.find((card) => String(card.id) === eventId);

  const [ticketQuantity, setTicketQuantity] = useState(1);
  const ticketPrice = 500.0;

  const updateQuantity = (change) => {
    const newQuantity = Math.min(Math.max(1, ticketQuantity + change), 10);
    setTicketQuantity(newQuantity);
  };

  const totalAmount = (ticketQuantity * ticketPrice).toFixed(2);
  const currentDate = new Date();
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = currentDate.toLocaleString("en-US", options);

  return (
    <>
      <div>
        <Navbar />

        {selectedCard && (
          <div className=" flex justify-between bg-primary text-white p-10 ">
            <div className="relative mt-10">
              <img src={selectedCard.image} alt={selectedCard.title} />
              <h2 className="mt-3 overflow-hidden overflow-ellipsis max-w-[250px]">
                {selectedCard.title}
              </h2>
              <div className="flex gap-2 mt-2">
                <small> {selectedCard.date}</small>
                <OvalIcon className="mt-2" />
                <small className="mb-40"> {selectedCard.location}</small>
              </div>
            </div>
            <div className=" rounded-md p-7 bg-Dark shadow-xl mt-10">
              <h1 className="font-bold text-xl">Event Details</h1>
              <Line className="bg-Dark mt-4 w-full" />
              <div className="mt-10 flex gap-5">
                <div className="rounded-full w-[55px] h-[55px] bg-primary">
                  <Vector className="mt-4 ml-4" />
                </div>
                <div className="">
                  <h6 className="">Date and Time</h6>
                  <h1>{formattedDate}</h1>
                </div>
              </div>
              <Line className="bg-Dark mt-4 w-full" />
              <div className="mt-10 flex gap-5">
                <div className="rounded-full w-[55px] h-[55px] bg-primary">
                  <Location className="mt-4 ml-4" />
                </div>
                <div className="">
                  <h6 className="">Location</h6>
                  <h1>{selectedCard.location}</h1>
                  <button className="text-Red mt-5">View on Map </button>
                </div>
              </div>
              <Line className="bg-Dark mt-4 w-full" />
              <div className="mt-5">
                <h1 className="font-bold text-xl">Select tickets</h1>

                <div className="flex justify-between">
                  <div>
                    <h6 className="p-4">{ticketQuantity}x Ticket(s)</h6>
                    <h1 className="ml-4 font-bold">USD $500.00</h1>
                  </div>
                  <div className="flex gap-5 mt-14">
                    <div>
                      <button
                        className="bg-Red px-1.5 py-0.5"
                        onClick={() => updateQuantity(-1)}
                      >
                        -
                      </button>
                    </div>
                    <h1 className="font-bold">{ticketQuantity}</h1>
                    <div>
                      <button
                        className="bg-Red px-1.5 py-0.5"
                        onClick={() => updateQuantity(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to={`/chechout/${eventId}/${ticketQuantity}/${totalAmount}`}
              >
                <div className="mt-5">
                  <button className="bg-Red p-4 w-[100%] rounded-md">
                    Check out for {totalAmount}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ScreenTwo;
