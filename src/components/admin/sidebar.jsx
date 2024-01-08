import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/svg/Vector.svg";
import { SlArrowDown } from "react-icons/sl";

const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="bg-Dark text-white flex">
                <div className=" h-screen p-10">
                    <div className="flex gap-5 ">
                        <LogoIcon className="animate-bounce mt-5" />
                        <h1 className="text-2xl font-bold  ">TickTicketing</h1>
                    </div>

                    <hr className="mt-5"></hr>
                    <div className="pt-10">
                        <button
                            className="flex px-3 py-2 rounded-sm "
                            onClick={handleDropdownClick}
                        >Post


                            <SlArrowDown
                                className={`ml-20 mt-1 duration-300  ${isDropdownOpen ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>
                        {isDropdownOpen && (
                            <div className="mt-2">

                                <h1 className="ml-10  hover:text-shadow">
                                    Add Post
                                </h1>

                            </div>
                        )}
                    </div>
                    <div className="mt-5">
                        <h1
                            className="flex px-3 py-2 rounded-sm "

                        >User</h1>
                    </div>


                </div>





            </div >


        </>
    )
}
export default Sidebar;