import React from 'react';
import { Link } from 'react-router-dom';
const Detailspage = () => {
    return (
        <>
            <div className='p-20 bg-shadow'>
                <div>
                    <h1 className="font-bold  text-3xl">Order Details</h1>
                    <div className='flex mt-10 gap-3'>
                        <h1 className='font-bold '>
                            Full Name:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold '>
                            Email:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold '>
                            Address:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold '>
                            Country:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>

                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold ' >
                            City:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold ' >
                            State:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold '>
                            Zip/Post Code:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold '>
                            Event Detail:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold '>
                            Event Type
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold '>
                            Location of Movie:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold '>
                            Total Ticket:
                        </h1>
                        <p className=''>2x</p>
                    </div>
                    <div className='flex mt-5 gap-3'>
                        <h1 className='font-bold '>
                            Date:
                        </h1>
                        <p className=''>Prameshwor</p>
                    </div>
                </div>
                <Link to="/orderpage">
                    <div className="mt-16">
                        <button className="bg-Dark text-white px-2 py-1 ">Back </button>
                    </div>
                </Link>


            </div>
        </>
    )

}
export default Detailspage;