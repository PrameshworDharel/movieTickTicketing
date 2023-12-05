import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import * as images from "../assets/images";
import { ReactComponent as OvalIcon } from "../assets/svg/Oval.svg";

const CardArray = [
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

  return (
    <>
      <div>
        <Navbar />

        {selectedCard && (
          <div className="relative p-10 bg-Dark text-white">
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
        )}
      </div>
    </>
  );
};

export default ScreenTwo;
