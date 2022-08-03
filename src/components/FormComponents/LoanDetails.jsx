import React from "react";

const LoanDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="loanamount"
        >
          Loan Amound
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="loanamount"
          type="number"
          placeholder="Loan Amount"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="duration"
        >
          Duration
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="duration"
          type="number"
          placeholder="Loan duration"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="bankname"
        >
          Bank Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="bankname"
          type="text"
          placeholder="Bank name"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="bankaccno"
        >
          Bank Account No.
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="bankaccno"
          type="text"
          placeholder="Bank account no."
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="interest"
        >
          Interest Rate
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="interest"
          type="number"
          placeholder="Interest rate"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="loantenure"
        >
          Loan Tenure
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="loantenure"
          type="text"
          placeholder="Loan tenure"
        />
      </div>
      <div class="mb-4 col-span-2">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 ml-1"
          for="loarreason"
        >
          Where the loan will be used?
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400"
          id="loarreason"
          type="text"
          placeholder="Write here..."
        />
      </div>
    </div>
  );
};

export default LoanDetails;
