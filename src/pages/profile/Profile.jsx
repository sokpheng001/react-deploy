// src/components/EditProfile.jsx
import React, { useState } from 'react';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    contactNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Handle save logic here (e.g., API call)
    console.log('Saving data:', formData);
  };

  const handleCancel = () => {
    // Optionally reset the form or navigate away
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      contactNumber: '',
      password: '',
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit profile</h1>
      <div className="flex justify-center mb-6">
        <img
          alt="Profile picture of a person"
          className="rounded-full"
          height="100"
          src="https://i.pinimg.com/736x/81/70/17/817017be04695c51b985a090570a03cf.jpg"
          width="100"
        />
      </div>
      <form className="space-y-4" onSubmit={handleSave}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-bold mb-1">First Name</label>
            <input
              name="firstName"
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Rida"
            />
          </div>
          <div>
            <label className="block font-bold mb-1">Last Name</label>
            <input
              name="lastName"
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Gony"
            />
          </div>
        </div>
        <div>
          <label className="block font-bold mb-1">Email</label>
          <input
            name="email"
            className="w-full border border-gray-300 p-2 rounded"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Address</label>
          <input
            name="address"
            className="w-full border border-gray-300 p-2 rounded"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="street, city"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Contact Number</label>
          <input
            name="contactNumber"
            className="w-full border border-gray-300 p-2 rounded"
            type="text"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="885+"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Password</label>
          <input
            name="password"
            className="w-full border border-gray-300 p-2 rounded"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Strong password"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 border border-gray-300 rounded"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
