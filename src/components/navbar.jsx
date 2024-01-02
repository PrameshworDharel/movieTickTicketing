import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../assets/svg/Vector.svg";
const Navbar = () => {
  return (
    <>
      <div className="p-10 bg-Dark text-white">
        <nav className="flex justify-between">
          <div className="flex">
            <Link to="/">
              <div className="flex gap-4 ml-10 ">
                <LogoIcon />
                <h1 className="text-2xl font-bold ">TickTicketing</h1>
              </div>
            </Link>

            <div className=" ml-20">
              <ul className="flex gap-16 mt-2">
                <Link to="/">Home</Link>
                <Link to="/concerts">Concerts</Link>
                <li>Movies</li>
                <li>Theater Events</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-10">
            <Link to="/loginpage">
              <button className="bg-Brand px-2 py-1">Login</button>
            </Link>

            <Link to="/register">
              <button className="bg-Brand px-2 py-1">Register</button>
            </Link>

          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
