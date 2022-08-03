import React from "react";

const LoanDetails = ({ formData, setFormData }) => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="loanamount"
        >
          Loan Amound
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="loanamount"
          type="number"
          placeholder="Loan Amount"
          onChange={(e) =>
            setFormData({ ...formData, loanAmount: e.target.value })
          }
          defaultValue={formData?.loanAmount}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="duration"
        >
          Duration
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="duration"
          type="number"
          placeholder="Loan duration"
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
          defaultValue={formData?.duration}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="bankname"
        >
          Bank Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="bankname"
          type="text"
          placeholder="Bank name"
          onChange={(e) =>
            setFormData({ ...formData, bankName: e.target.value })
          }
          defaultValue={formData?.bankName}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="bankaccno"
        >
          Bank Account No.
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="bankaccno"
          type="text"
          placeholder="Bank account no."
          onChange={(e) =>
            setFormData({ ...formData, bankACCNo: e.target.value })
          }
          defaultValue={formData?.bankAccNo}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="interest"
        >
          Interest Rate
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="interest"
          type="number"
          placeholder="Interest rate"
          onChange={(e) =>
            setFormData({ ...formData, interestRate: e.target.value })
          }
          defaultValue={formData?.interestRate}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="loantenure"
        >
          Loan Tenure
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="loantenure"
          type="text"
          placeholder="Loan tenure"
          onChange={(e) =>
            setFormData({ ...formData, loanTenure: e.target.value })
          }
          defaultValue={formData?.loanTenure}
        />
      </div>
      <div className="mb-4 col-span-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 ml-1"
          htmlFor="loarreason"
        >
          Where the loan will be used?
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="loarreason"
          type="text"
          placeholder="Write here..."
          onChange={(e) =>
            setFormData({ ...formData, loanReason: e.target.value })
          }
          defaultValue={formData?.loanReason}
        />
      </div>
    </div>
  );
};

export default LoanDetails;
