import React from "react";
import { Link } from "react-router-dom";
const Topbar = () => {
    return (
        <>
            <div className="  bg-Light flex  justify-between text-white p-5 ">
                <div className="p-5">
                    <h1 className="font-bold text-3xl">Admin</h1>
                </div>
                <Link to="/">
                    <div>
                        <button className="mt-5 px-3 py-2 bg-Dark">Logout</button>
                    </div>
                </Link>

            </div>

        </>
    )
}
export default Topbar;