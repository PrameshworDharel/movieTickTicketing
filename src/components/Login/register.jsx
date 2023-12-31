import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/svg/Vector.svg";
const Registerpage = () => {
    return (
        <>
            <div className=" bg-primary text-white p-10  ">
                <div className="bg-Dark w-[450px] p-10 mt-40 ml-96 shadow-md">
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
                                    className="bg-Dark shadow-md border px-3 py-1 ml-10"
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
                                    className="bg-Dark shadow-md border px-3 py-1 ml-10 mt-5"
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
                                    className="bg-Dark shadow-md border px-3 py-1 ml-14 mt-5"
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
                                    className="bg-Dark shadow-md border px-3 py-1 ml-10 mt-5"
                                />
                            </label>
                            <br />
                            <div className="flex justify-center">
                                <button type="submit" className="mt-5 shadow-lg px-3 py-2 bg-Light">Register</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Registerpage; 