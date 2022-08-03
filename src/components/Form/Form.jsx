import React, { useState } from "react";
import BusinessDetails from "../FormComponents/BusinessDetails";
import LoanDetails from "../FormComponents/LoanDetails";
import PersonalDetails from "../FormComponents/PersonalDetails";

const Form = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    dob: "",
    phone: "",
    email: "",
    paddress: "",
    businessName: "",
    businessType: "",
    gstno: "",
    telephone: "",
    registration: "",
    businessEmail: "",
    officeAddress: "",
    loanAmount: "",
    duration: "",
    bankName: "",
    bankAccNo: "",
    interestRate: "",
    loanTenure: "",
    loanReason: "",
  });
  const PageDisplayed = () => {
    if (currentPage === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (currentPage === 1) {
      return <BusinessDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <LoanDetails formData={formData} setFormData={setFormData} />;
    }
  };

  const handleOnSubmit = (e) => {
    const data = { ...formData };
    console.log(data);
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
          type={currentPage === 2 ? "submit" : "button"}
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
      <form className=" lg:w-1/2 mx-auto shadow-md  px-10 pt-5 pb-10">
        <div data-form-body>{PageDisplayed()}</div>

        <div className="flex justify-center gap-10 mt-5">
          <button
            disabled={currentPage === 0}
            type="button"
            onClick={() => setCurrentPage((page) => page - 1)}
            className={`px-14 py-2 flex justify-center gap-10  rounded-full  text-blue border-[1.5px] bg-blue-50 border-blue-500 cursor-pointer font-bold active:scale-[0.98] transition duration-200 ease-in-out disabled:opacity-[0.3] disabled:bg-gray-400 disabled:cursor-default disabled:border-0`}
          >
            Previous
          </button>

          <button
            type="button"
            onClick={() => {
              if (currentPage === 2) {
                handleOnSubmit();
              } else {
                setCurrentPage((page) => page + 1);
              }
            }}
            className="px-16 py-2 rounded-full bg-green-500 text-white cursor-pointer font-bold active:scale-[0.98] transition duration-200 ease-in-out"
          >
            {currentPage === 2 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
