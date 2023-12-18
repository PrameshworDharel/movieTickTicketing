import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../assets/svg/Vector.svg";
const Navbar = () => {
  return (
    <>
      <div className="p-10 bg-Dark text-white">
        <nav className="flex justify-between">
          <div className="flex">
            <div className="flex gap-4 ml-10 ">
              <LogoIcon />
              <h1 className="text-2xl font-bold ">TickTicketing</h1>
            </div>
            <div className=" ml-20">
              <ul className="flex gap-16 mt-2">
                <Link to="/">Home</Link>
                <li>Concerts</li>
                <li>Movies</li>
                <li>Theater Events</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-10">
            <button className="">Login</button>
            <button className="bg-Brand px-2 py-1">Register</button>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
