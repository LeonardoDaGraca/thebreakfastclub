import React, { useState } from "react";

export const CreateForm = ({ handleShowForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    field1: "",
    field2: "",
    // ...add as many fields as necessary
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
    console.log(formData);
    handleShowForm();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-400 p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="field1"
          className="block text-gray-700 font-medium mb-2"
        >
          Field 1:
        </label>
        <input
          type="text"
          id="field1"
          name="field1"
          value={formData.field1}
          onChange={handleChange}
          className="border border-gray-400 p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="field2"
          className="block text-gray-700 font-medium mb-2"
        >
          Field 2:
        </label>
        <input
          type="text"
          id="field2"
          name="field2"
          value={formData.field2}
          onChange={handleChange}
          className="border border-gray-400 p-2 w-full"
        />
      </div>

      {/* ...add as many fields as necessary */}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};
