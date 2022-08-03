import React from "react";
import { BsChevronDown } from "react-icons/bs";

const PersonalDetails = ({ formData, setFormData }) => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="firstname"
        >
          Full Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="firstname"
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          defaultValue={formData?.fullName}
        />
      </div>
      <div className="mb-4 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="gender"
        >
          Gender
        </label>
        <select
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          defaultValue={formData?.gender}
          className="form-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="gender"
        >
          <option>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <BsChevronDown className="absolute top-10 right-3 text-md" />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="age"
        >
          Age
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="age"
          type="number"
          min={18}
          placeholder="Age"
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          defaultValue={formData?.age}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="dob"
        >
          Date of Birth
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="dob"
          type="date"
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          defaultValue={formData?.dob}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="phone"
        >
          Phone No.
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="phone"
          type="tel"
          placeholder="Phone no."
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          defaultValue={formData?.phone}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          defaultValue={formData?.email}
        />
      </div>
      <div className="mb-4 col-span-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="address"
        >
          Permanent Address
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="address"
          type="address"
          placeholder="Permanent Address"
          onChange={(e) =>
            setFormData({ ...formData, paddress: e.target.value })
          }
          defaultValue={formData?.paddress}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
