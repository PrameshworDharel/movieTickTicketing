import React from "react";
const Topbar = () => {
    return (
        <>
            <div className="  bg-Light flex  justify-between text-white p-5 ">
                <div className="p-5">
                    <h1 className="font-bold text-3xl">Admin</h1>
                </div>
                <div>
                    <button className="mt-5 px-3 py-2 bg-Dark">Logout</button>
                </div>
            </div>

        </>
    )
}
export default Topbar;