import React from "react";
import { BsChevronDown } from "react-icons/bs";

const PersonalDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="firstname"
        >
          Full Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="firstname"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="mb-4 relative">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="gender"
        >
          Gender
        </label>
        <select
          class="form-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="gender"
        >
          <option>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <BsChevronDown className="absolute top-10 right-3 text-md" />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="age"
        >
          Age
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="age"
          type="number"
          min={18}
          placeholder="Age"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="dob"
        >
          Date of Birth
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="dob"
          type="date"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="phone"
        >
          Phone No.
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="phone"
          type="tel"
          placeholder="Phone no."
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="email"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-4 col-span-2">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="address"
        >
          Permanent Address
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="address"
          type="address"
          placeholder="Address"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
