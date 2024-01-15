import React, { useState, useEffect } from "react";
import MyModal from "../../Popupmodel/demo";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuid } from 'uuid';
import axios from "axios";
const Postpage = () => {
    const [isAddModelOpen, setIsAddModelOpen] = useState(false);
    const [data, setData] = useState([]);
    const [base64Image, setBase64Image] = useState("");
    const [formData, setFormData] = useState({
        id: uuid(),
        categories: "",
        image: "",
        title: "",
        date: "",
        location: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {

        axios.get("http://localhost:5000/moviepost")
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const validateForm = () => {
        const errors = {};

        if (!formData.categories.trim()) {
            errors.categories = "Categories is required.";
        }
        if (!base64Image) {
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
        const { name, value, type } = e.target;

        if (type === "file") {
            const file = e.target.files[0];
            setFormData((prevData) => ({ ...prevData, [name]: file }));

            const imageUrl = URL.createObjectURL(file);
            setBase64Image(imageUrl);
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };




    const handleAddSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            if (isEdit) {
                // Update existing data on the server
                axios.put(`http://localhost:5000/moviepost/${formData.id}`, formData)
                    .then(response => {
                        const updatedData = data.map(item => (item.id === formData.id ? response.data : item));
                        setData(updatedData);
                    })
                    .catch(error => console.error("Error updating data:", error));

                setIsEdit(false);
            } else {
                // Add new data to the server
                axios.post("http://localhost:5000/moviepost", formData)
                    .then(response => setData(prevData => [...prevData, response.data]))
                    .catch(error => console.error("Error adding data:", error));
            }

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



    const handleEditClick = (id) => {
        const selectedData = data.find((item) => item.id === id);
        setFormData({
            id: selectedData.id,
            categories: selectedData.categories,
            image: selectedData.image,
            title: selectedData.title,
            date: selectedData.date,
            location: selectedData.location
        });

        setIsAddModelOpen(true);
        setIsEdit(true);
    };

    const handleDelete = (id) => {
        // Delete data on the server
        axios.delete(`http://localhost:5000/moviepost/${id}`)
            .then(() => {
                const updatedData = data.filter(item => item.id !== id);
                setData(updatedData);
            })
            .catch(error => console.error("Error deleting data:", error));
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
                                <h1 className="text-xl font-bold">{isEdit ? "Update Movie" : "Add Movie"}</h1>
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
                                    onChange={handleChange}
                                />
                                {formErrors.image && (
                                    <span className="text-Red mt-2">{formErrors.image}</span>
                                )}

                                {base64Image && (
                                    <img
                                        src={base64Image}
                                        alt="Preview"
                                        className="mt-2 w-full max-h-40 object-cover"
                                    />
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
                                <button className="bg-Dark px-3 py-2 ml-5 text-white" type="submit"> {isEdit ? "Update" : "Add"}</button>
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
                                    <td></td>
                                    {/* <td>
                                        {val.image && (
                                            <img
                                                src={typeof val.image === "string" ? val.image : URL.createObjectURL(val.image)}
                                                alt="img"
                                                style={{ width: "50px", height: "50px" }}
                                            />
                                        )}
                                    </td> */}
                                    <td>{val.title}</td>
                                    <td>{val.date}</td>
                                    <td>{val.location}</td>
                                    <td className="flex gap-5">
                                        <button onClick={() => handleEditClick(val.id)} >
                                            <FaRegEdit />
                                        </button>
                                        <button type="button" onClick={() => handleDelete(val.id)} className="">
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
