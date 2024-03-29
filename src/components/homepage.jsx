import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as images from "../assets/images";
import { ReactComponent as OvalIcon } from "../assets/svg/Oval.svg";

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

const Homepage = () => {
  const [event, setEvent] = useState(null);
  useEffect(() => {
    fetchMoviesData();
  }, []);
  const fetchMoviesData = async () => {
    try {
      const response = await fetch(
        " http://www.omdbapi.com/?i=tt3896198&apikey=b41a788a&type=movie"
      );
      const data = await response.json();
      // setEvent(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching Movies data:", error);
    }
  };
  return (
    <div className="bg-primary flex p-10 text-white gap-28 relative ">
      {CardArray.map((event) => (
        <Link key={event.id} to={`/screen2/${event.id}`}>
          <div className="relative p-10  mb-28">
            <img src={event.image} alt={event.title} />
            <button className="absolute top-14 right-16 bg-Light text-white py-1 px-3 rounded shadow-lg">
              {event.buttonText}
            </button>
            <h2 className="mt-3 overflow-hidden overflow-ellipsis max-w-[260px]">
              {event.title}
            </h2>
            <div className="flex gap-2 mt-2">
              <small> {event.date}</small>
              <OvalIcon className="mt-2" />
              <small className="mb-40"> {event.location}</small>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Homepage;
