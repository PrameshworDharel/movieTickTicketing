import React from "react";
import { MdDelete } from "react-icons/md";
const Userpage = () => {
    
    return (
        <>
            <div className="mt-10 flex justify-center">
                <table className="bg-shadow border ml-5 mr-5 w-full">
                    <thead className="border">
                        <tr className="flex justify-between p-3">
                            <th className="p-2">S.N</th>
                            <th className="p-2">First Name</th>
                            <th className="p-2">Last Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Password</th>
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

                            <td className="gap-5">

                                <button type="button" className="">
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div >

        </>
    )
}
export default Userpage;