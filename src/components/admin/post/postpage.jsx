
import React, { useState } from "react";
import MyModal from "../../Login/demo";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuid } from 'uuid';
const Postpage = () => {
    const [isAddModelOpen, setIsAddModelOpen] = useState(false);
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        id: uuid(),
        categories: "",
        image: "",
        title: "",
        date: "",
        location: "",
    });
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!formData.categories.trim()) {
            errors.categories = "Categories is required.";
        }
        if (!formData.image.trim()) {
            errors.image = "Image is required.";
        }
        if (!formData.title.trim()) {
            errors.title = "Title is required.";
        }
        if (!formData.date.trim()) {
            errors.date = "Date is required.";
        }
        if (!formData.location.trim()) {
            errors.location = "Location is required.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setData((prevData) => [...prevData, formData]);
            setIsAddModelOpen(false);
            setFormData({
                id: uuid(),
                categories: "",
                image: "",
                title: "",
                date: "",
                location: "",
            });
        }
    };

    return (
        <>
            <div className="text-Light">
                <div className="flex justify-end mt-20">
                    <div>
                        <button onClick={() => setIsAddModelOpen(!isAddModelOpen)} className="bg-Dark px-3 py-2 mr-5 text-white">Add Post</button>
                    </div>
                    <MyModal
                        isOpen={isAddModelOpen}
                        closeModal={() => setIsAddModelOpen(false)}
                    >
                        <form className="bg-shadow p-7" onSubmit={handleAddSubmit}>
                            <div className="flex justify-center mb-5">
                                <h1 className="text-xl font-bold">Add Movie</h1>
                            </div>
                            <div className="mb-5">
                                <label className="block">Categories:</label>
                                <input
                                    type="text"
                                    name="categories"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formData.categories}
                                    onChange={handleChange}
                                />
                                {formErrors.categories && (
                                    <span className="text-Red mt-2">{formErrors.categories}</span>
                                )}
                            </div>
                            <div className="mb-5">
                                <label className="block">Image:</label>
                                <input
                                    type="file"
                                    name="image"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formData.image}
                                    onChange={handleChange}
                                />
                                {formErrors.image && (
                                    <span className="text-Red mt-2">{formErrors.image}</span>
                                )}
                            </div>
                            <div className="mb-5">
                                <label className="block">Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                                {formErrors.title && (
                                    <span className="text-Red mt-2">{formErrors.title}</span>
                                )}
                            </div>
                            <div className="mb-5">
                                <label className="block">Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                                {formErrors.date && (
                                    <span className="text-Red mt-2">{formErrors.date}</span>
                                )}
                            </div>
                            <div className="mb-5">
                                <label className="block">Location:</label>
                                <input
                                    type="text"
                                    name="location"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                                {formErrors.location && (
                                    <span className="text-Red mt-2">{formErrors.location}</span>
                                )}
                            </div>
                            <div className="flex justify-center mt-10">
                                <button className="bg-Dark px-3 py-2 ml-5 text-white" type="submit">Add</button>
                                <button className="bg-Dark px-3 py-2 ml-5 text-white" type="button" onClick={() => setIsAddModelOpen(false)}>Cancel</button>
                            </div>
                        </form>
                    </MyModal>
                </div>
                <div className="mt-10 flex justify-center">
                    <table className="bg-shadow border ml-5 mr-5 w-full">
                        <thead className="border">
                            <tr className="flex justify-between p-3">
                                <th className="p-2">S.N</th>
                                <th className="p-2">Categories</th>
                                <th className="p-2">Image</th>
                                <th className="p-2">Title</th>
                                <th className="p-2">Date</th>
                                <th className="p-2">Location</th>
                                <th className="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((val) => (
                                <tr key={val.id} className="flex justify-between p-4">
                                    <td>{val.id}</td>
                                    <td>{val.categories}</td>
                                    <td>{val.image}</td>
                                    <td>{val.title}</td>
                                    <td>{val.date}</td>
                                    <td>{val.location}</td>
                                    <td className="flex gap-5">
                                        <button>
                                            <FaRegEdit />
                                        </button>
                                        <button type="button" className="">
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Postpage;
