import React, { useState } from "react";
import BusinessDetails from "../FormComponents/BusinessDetails";
import LoanDetails from "../FormComponents/LoanDetails";
import PersonalDetails from "../FormComponents/PersonalDetails";

const Form = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const PageDisplayed = () => {
    if (currentPage === 0) {
      return <PersonalDetails />;
    } else if (currentPage === 1) {
      return <BusinessDetails />;
    } else {
      return <LoanDetails />;
    }
  };
  return (
    <>
      {/* tab */}
      <div className=" relative w-1/2 mx-auto mb-7 mt-10 flex justify-between">
        <button
          onClick={() => setCurrentPage(0)}
          className={`rounded-full px-5 py-2 ${
            currentPage === 0 ? "bg-blue-500" : "bg-gray-500"
          } text-white cursor-pointer`}
        >
          Personal Details
        </button>
        <button
          onClick={() => setCurrentPage(1)}
          className={`rounded-full px-5 py-2 ${
            currentPage === 1 ? "bg-blue-500" : "bg-gray-500"
          } text-white cursor-pointer`}
        >
          Business Details
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`rounded-full px-5 py-2 ${
            currentPage === 2 ? "bg-blue-500" : "bg-gray-500"
          } text-white cursor-pointer`}
        >
          Loan Details
        </button>

        <div className="h-[1.5px] z-[-2]  absolute top-[50%] bg-gray-500 w-[99%]"></div>
      </div>

      {/* form */}
      <div className=" lg:w-1/2 mx-auto shadow-md  px-10 pt-5 pb-10">
        <div data-form-body>{PageDisplayed()}</div>

        <div className="flex justify-center gap-10 mt-5">
          <button className="px-16 py-2 flex justify-center gap-10  rounded-full  text-blue border-[1.5px] bg-blue-50 border-blue-500 cursor-pointer">
            Previous
          </button>
          <button className="px-20 py-2 rounded-full bg-green-500 text-white cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
