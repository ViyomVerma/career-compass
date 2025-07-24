import React, { useState } from 'react';

const AddJob = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    email: '',
    phone: '',
    domain: '',
    experience: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application Submitted!");
    setFormData({
      firstName: '',
      lastName: '',
      location: '',
      email: '',
      phone: '',
      domain: '',
      experience: '',
      resume: null
    });
  };

  return (
    <div className="max-w-md mx-auto  p-6 bg-white rounded-lg shadow-md mt-24">
      <h2 className="text-xl font-semibold text-center text-emerald-700 mb-6">Job Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 border rounded px-3 py-2"
            required
          />
        </div>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="text"
          name="domain"
          placeholder="Job Domain (e.g., Web Dev)"
          value={formData.domain}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience (e.g., Fresher, 1 Year)"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />

        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 bg-white"
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJob;
