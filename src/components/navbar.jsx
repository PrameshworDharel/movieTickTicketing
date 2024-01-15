import React, { useState } from "react"
import { Link } from "react-router-dom";
import MyModal from "./Login/demo";
import { ReactComponent as LogoIcon } from "../assets/svg/Vector.svg";
const Navbar = () => {
  const [isAddModelOpen, setIsAddModelOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <div className="p-10 bg-Dark text-white  ">
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
            <div>
              <button onClick={() => setIsAddModelOpen(!isAddModelOpen)} className="bg-Brand px-2 py-1">Login</button>
            </div>
            <MyModal
              isOpen={isAddModelOpen}
              closeModal={() => setIsAddModelOpen(false)}
            >
              <div className="flex gap-5 ">
                <LogoIcon className="animate-bounce mt-5" />
                <h1 className="text-2xl font-bold ">TickTicketing</h1>

              </div>
              <hr className="mt-5"></hr>
              <div>
                <h1 className="text-xl font-bold mt-5">Movie Ticket Login</h1>
              </div>
              <div className="mt-10">
                <form>

                  <label className="ml-5">
                    Email:
                    <input
                      type="email"
                      name="email"
                      // value={formData.firstName}
                      // onChange={handleChange}
                      required
                      className=" shadow-md border px-3 py-1 ml-14 mt-5"
                    />
                  </label>
                  <br />
                  <label className="ml-2">
                    Password:
                    <input
                      type="password"
                      name="password"
                      // value={formData.firstName}
                      // onChange={handleChange}
                      required
                      className=" shadow-md border px-3 py-1 ml-10 mt-5"
                    />
                  </label>
                  <br />
                  <Link to="adminpage">

                    <div className="flex justify-center">
                      <button type="submit" className="mt-5 shadow-lg px-3 py-2 bg-Light text-white">Login</button>
                    </div>
                  </Link>



                </form>
                <div className="flex gap-5 mt-3 ml-10">
                  <h1>
                    Don't have an account?
                  </h1>
                  <button onClick={() => {
                    setIsRegister(!isRegister);
                    setIsAddModelOpen(false);
                  }} className="text-Dark">Register</button>
                </div>
              </div>
            </MyModal>

            {/* <div>
              <button onClick={() => setIsRegister(!isRegister)} className="bg-Brand px-2 py-1">Register</button>
            </div> */}
            <MyModal isOpen={isRegister}
              closeModal={() => setIsRegister(false)}

            >

              <div className="">
                <div className="flex gap-5 ">
                  <LogoIcon className="animate-bounce mt-5" />
                  <h1 className="text-2xl font-bold  ">TickTicketing</h1>

                </div>
                <hr className="mt-5"></hr>
                <div>
                  <h1 className="text-xl font-bold mt-5">Movie Ticket Registration</h1>
                </div>
                <div className="mt-10">
                  <form>
                    <label className="">
                      First Name:
                      <input
                        type="text"
                        name="firstName"
                        // value={formData.firstName}
                        // onChange={handleChange}
                        required
                        className=" shadow-md border px-3 py-1 ml-10"
                      />
                    </label>
                    <br />
                    <label className="">
                      Last Name:
                      <input
                        type="text"
                        name="firstName"
                        // value={formData.firstName}
                        // onChange={handleChange}
                        required
                        className=" shadow-md border px-3 py-1 ml-10 mt-5"
                      />
                    </label>
                    <br />
                    <label className="ml-5">
                      Email:
                      <input
                        type="email"
                        name="email"
                        // value={formData.firstName}
                        // onChange={handleChange}
                        required
                        className="shadow-md border px-3 py-1 ml-14 mt-5"
                      />
                    </label>
                    <br />
                    <label className="ml-2">
                      Password:
                      <input
                        type="password"
                        name="password"
                        // value={formData.firstName}
                        // onChange={handleChange}
                        required
                        className=" shadow-md border px-3 py-1 ml-10 mt-5"
                      />
                    </label>
                    <br />
                    <div className="flex justify-center">
                      <button type="submit" className="mt-5 shadow-lg px-3 py-2 bg-Light text-white">Register</button>
                    </div>

                  </form>
                  <div className="flex gap-5 mt-3 ml-10">
                    <h1>
                      Already have an account?
                    </h1>
                    <button onClick={() => {
                      setIsAddModelOpen(!isAddModelOpen);
                      setIsRegister(false);
                    }} className="text-Dark">Login</button>
                  </div>
                </div>
              </div>

            </MyModal>
          </div>

        </nav>
      </div>
    </>
  );
};
export default Navbar;
