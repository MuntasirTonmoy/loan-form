import React from "react";
import { BsChevronDown } from "react-icons/bs";

const BusinessDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="businessname"
        >
          Business Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="businessname"
          type="text"
          placeholder="Business name"
        />
      </div>
      <div class="mb-4 relative">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="businesstype"
        >
          Business Type
        </label>
        <select
          class="form-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="businesstype"
        >
          <option selected>Business Type</option>
          <option value="salaried">Salaried</option>
          <option value="selfEmployedProfessional">
            Self Employed Professional
          </option>
          <option value="selfEmployedBusinessMan">
            Self Employed Businessman
          </option>
        </select>
        <BsChevronDown className="absolute top-10 right-3 text-md" />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="gstno"
        >
          GST No.
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="gstno"
          type="text"
          placeholder="Gst no."
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="telephone"
        >
          Telephone No.
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="telephone"
          type="tel"
          placeholder="Telephone no."
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="regno"
        >
          Registration No.
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="regno"
          type="text"
          placeholder="Registration no."
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
          type="businessemail"
          placeholder="Business email"
        />
      </div>
      <div class="mb-4 col-span-2">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="officeaddress"
        >
          Office Adress
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="officeaddress"
          type="address"
          placeholder="Office address"
        />
      </div>
    </div>
  );
};

export default BusinessDetails;
