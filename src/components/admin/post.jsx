import React, { useState } from "react";
import MyModal from "../Login/demo";

const Postpage = () => {
    const [isAddModelOpen, setIsAddModelOpen] = useState(false);
    return (
        <>
            <div className=" text-Light">
                <div className="flex justify-end mt-20">

                    <div>
                        <button onClick={() => setIsAddModelOpen(!isAddModelOpen)} className="bg-Dark px-3 py-2 mr-20  text-white ">AddPost</button>
                    </div>
                    <MyModal
                        isOpen={isAddModelOpen}
                        closeModal={() => setIsAddModelOpen(false)}
                    >
                        <form className="bg-shadow ">
                            <div className="flex justify-center">
                                <h1 className="text-xl font-bold ">Add Movie</h1>

                            </div>
                            <div className="p-7">
                                <div className="">
                                    <label className="mt-2">Categories:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="ml-10 px-3 py-2  border border-gray-300 rounded"

                                    />

                                </div>
                                <div className="mt-5">
                                    <div className=" flex">
                                        <label className="mt-2">Image: </label>
                                        <input type="file" name="image" className=" rounded" ></input>
                                    </div>

                                </div>

                                <div className="mt-5 flex justify-between">
                                    <label className="mt-2">Title:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className=" px-3 py-2  border border-gray-300 rounded"

                                    />

                                </div>
                                <div className="mt-5 flex justify-between">
                                    <label className="mt-2 ">
                                        Date:
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className=" px-3 py-2  border border-gray-300 rounded"

                                    />
                                </div>
                                <div className="mt-5 flex justify-between">
                                    <label className="mt-2">Location:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="p-2  border border-gray-300 rounded"


                                    />

                                </div>
                                <div className=" flex justify-center mt-10 text-shadow">
                                    <button className="bg-Dark px-3 py-2 ">Add</button>
                                </div>

                            </div>


                        </form>


                    </MyModal>


                </div>
            </div >

        </>
    )
}
export default Postpage;