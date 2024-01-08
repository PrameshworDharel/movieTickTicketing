import React, { useState } from "react";
import MyModal from "../../Login/demo";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Postpage = () => {
    const [isAddModelOpen, setIsAddModelOpen] = useState(false);
    return (
        <>
            <div className=" text-Light">
                <div className="flex justify-end mt-20">

                    <div>
                        <button onClick={() => setIsAddModelOpen(!isAddModelOpen)} className="bg-Dark px-3 py-2 mr-5  text-white ">AddPost</button>
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
                                <div className="mt-5 ">
                                    <div className=" flex">
                                        <label className="">Image: </label>
                                        <input type="file" name="image" className=" rounded ml-[70px]" ></input>
                                    </div>

                                </div>

                                <div className="mt-5 flex ">
                                    <label className="mt-2">Title:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className=" ml-20 p-2 border border-gray-300 rounded"

                                    />

                                </div>
                                <div className="mt-5 flex">
                                    <label className="mt-2 ">
                                        Date:
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="ml-[80px] px-7 p-2 border border-gray-300 rounded"

                                    />
                                </div>
                                <div className="mt-5 flex ">
                                    <label className="mt-2">Location:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="p-2  ml-14 border border-gray-300 rounded"


                                    />

                                </div>
                                <div className=" flex justify-center mt-10 text-shadow">
                                    <button className="bg-Dark px-3 py-2 ">Add</button>
                                </div>

                            </div>


                        </form>


                    </MyModal>

                </div >
                <div className="mt-10 flex justify-center">
                    <table className="bg-shadow border ml-5 mr-5 w-full">
                        <thead className="border ">
                            <tr className="flex justify-between p-3 ">
                                <th className="p-2 ">S.N</th>
                                <th className="p-2">Categories</th>
                                <th className="p-2">Image</th>
                                <th className="p-2">Title</th>
                                <th className="p-2">Date</th>
                                <th className="p-2">Location</th>
                                <th className="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="flex justify-between p-4">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="flex gap-5">
                                    <button >
                                        <FaRegEdit />
                                    </button>
                                    <button type="button" className="">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Postpage;