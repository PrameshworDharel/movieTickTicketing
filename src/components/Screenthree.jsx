import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Line44 } from "../assets/svg/Line 44.svg";
import Navbar from "./navbar";
import { ReactComponent as OvalIcon } from "../assets/svg/Oval.svg";
import { CardArray } from "./Screentwo";
import { useParams } from "react-router-dom";
const ScreenThree = () => {
  const list = CardArray;
  const navigate = useNavigate();

  const { id, ticketQuantity, totalAmount } = useParams();

  const selectedCard = CardArray.find((card) => String(card.id) === id);
  const vatRate = 0.13;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    if (!formData.country.trim()) {
      errors.country = "Country is required";
    }
    if (!formData.city.trim()) {
      errors.city = "City is required";
    }
    if (!formData.state.trim()) {
      errors.state = "State is required";
    }
    if (!formData.zipCode.trim()) {
      errors.zipCode = "Zopcode is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate(
        `/invoice/${id}/${ticketQuantity}/${totalAmount}/${formData.fullName}/${formData.address}/${formData.city}/${formData.country}`
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="text-white">
        <Navbar />
        <Line44 className="bg-primary w-full h-full" />
        <div className=" bg-Dark  p-10 flex">
          <h5 className="ml-10">
            Home/ Explore event / {selectedCard.title} /
          </h5>
          <button className="text-Red"> Checkout</button>
        </div>
        <div className="bg-primary p-20">
          <h1 className="font-bold text-xl">Order Confirmation</h1>
          <Line44 className="mt-10" />
          <form className="flex gap-10" onSubmit={handleSubmit}>
            <div className="bg-Dark p-10 mt-20 rounded-md">
              <h1 className="font-bold text-xl">Information</h1>
              <div className="mt-10">
                <label htmlFor="fullName">Full Name</label>
                <div>
                  <input
                    className="w-full mt-2 h-10  bg-primary shadow-2xl rounded-md "
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {formErrors.fullName && (
                    <span className="text-red-500">{formErrors.fullName}</span>
                  )}
                </div>
              </div>
              <div className="flex">
                <div className="mt-5">
                  <label htmlFor="email">Email*</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <span className="text-red-500">{formErrors.email}</span>
                    )}
                  </div>
                </div>
                <div className="mt-5 ml-20">
                  <label htmlFor="address">Address*</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10   bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    {formErrors.address && (
                      <span className="text-red-500">{formErrors.address}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex ">
                <div className="mt-5">
                  <label htmlFor="country">Country*</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                    {formErrors.country && (
                      <span className="text-red-500">{formErrors.country}</span>
                    )}
                  </div>
                </div>
                <div className=" mt-5 ml-20">
                  <label htmlFor="state">State</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    {formErrors.state && (
                      <span className="text-red-500">{formErrors.state}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="mt-5">
                  <label htmlFor="city">City</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {formErrors.city && (
                      <span className="text-red-500">{formErrors.city}</span>
                    )}
                  </div>
                </div>
                <div className="mt-5 ml-20">
                  <label htmlFor="zipCode">Zip/Post Code*</label>
                  <div>
                    <input
                      className="w-[350px] mt-2 h-10  bg-primary shadow-2xl rounded-md"
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                    {formErrors.zipCode && (
                      <span className="text-red-500">{formErrors.zipCode}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-Dark mt-20 rounded-md">
              <div className="p-10 ">
                <h1 className="font-bold text-3xl">Checkout Summary</h1>
                <Line44 className="bg-primary w-[350px] mt-7" />
                <h1 className="mt-5">{selectedCard.title}</h1>
                <div className="flex gap-2 mt-2">
                  <h3> {selectedCard.buttonText}</h3>
                  <OvalIcon className="mt-3" />
                  <h3 className=""> {selectedCard.location}</h3>
                </div>
                <Line44 className="bg-primary w-[350px] mt-7" />
                <div className="mt-2 flex justify-between">
                  <h1>Normal</h1>
                  <h1>{ticketQuantity}x</h1>
                  <h1>$500.00</h1>
                </div>
                <div className="mt-2 flex justify-between">
                  <h1>Sub Total</h1>
                  <h1>${totalAmount}</h1>
                </div>
                <div className="mt-2 flex justify-between">
                  <h1>Tax( 13 % )</h1>
                  <h1>${(totalAmount * vatRate).toFixed(2)}</h1>
                </div>
                <div className="mt-2 flex justify-between">
                  <h1>Discount ( 0 % )</h1>
                  <h1>$0</h1>
                </div>
                <Line44 className="bg-primary w-[350px] mt-7" />
                <div className="mt-2 flex justify-between">
                  <h1>Total</h1>
                  <div className="gap-3 flex">
                    <small className="mt-1">USD</small>
                    <h1 className="font-bold text-2xl">
                      $
                      {(
                        parseFloat(totalAmount) +
                        totalAmount * vatRate
                      ).toFixed(2)}
                    </h1>
                  </div>
                </div>
                <Line44 className="bg-primary w-[350px] mt-7" />
                {/* <Link
                  to={`/invoice/${id}/${ticketQuantity}/${totalAmount}/${formData.fullName}/${formData.address}/${formData.city}/${formData.country}`}
                > */}
                <div className="mt-5">
                  <button
                    className="bg-Red p-4 w-[100%] rounded-md"
                    type="submit"
                  >
                    Confirm & pay
                  </button>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ScreenThree;
