import React from "react";
import { BsChevronDown } from "react-icons/bs";

const BusinessDetails = ({ formData, setFormData }) => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="businessname"
        >
          Business Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="businessname"
          type="text"
          placeholder="Business name"
          onChange={(e) =>
            setFormData({ ...formData, businessName: e.target.value })
          }
          defaultValue={formData?.businessName}
        />
      </div>
      <div className="mb-4 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="businesstype"
        >
          Business Type
        </label>
        <select
          className="form-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="businesstype"
          onChange={(e) =>
            setFormData({ ...formData, businessType: e.target.value })
          }
          defaultValue={formData?.businessType}
        >
          <option>Business Type</option>
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
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="gstno"
        >
          GST No.
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="gstno"
          type="text"
          placeholder="Gst no."
          onChange={(e) => setFormData({ ...formData, gstno: e.target.value })}
          defaultValue={formData?.gstno}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="telephone"
        >
          Telephone No.
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="telephone"
          type="tel"
          placeholder="Telephone no."
          onChange={(e) =>
            setFormData({ ...formData, telephone: e.target.value })
          }
          defaultValue={formData?.telephone}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="regno"
        >
          Registration No.
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="regno"
          type="text"
          placeholder="Registration no."
          onChange={(e) =>
            setFormData({ ...formData, registration: e.target.value })
          }
          defaultValue={formData?.registration}
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
          type="businessemail"
          placeholder="Business email"
          onChange={(e) =>
            setFormData({ ...formData, businessEmail: e.target.value })
          }
          defaultValue={formData?.businessEmail}
        />
      </div>
      <div className="mb-4 col-span-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="officeaddress"
        >
          Office Adress
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="officeaddress"
          type="address"
          placeholder="Office address"
          onChange={(e) =>
            setFormData({ ...formData, officeAddress: e.target.value })
          }
          defaultValue={formData?.officeAddress}
        />
      </div>
    </div>
  );
};

export default BusinessDetails;
