import React, { useEffect, useState } from "react";

const ShowData = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="lg:w-1/2 mx-auto shadow-md  pb-10  my-10">
      <h1 className="text-2xl font-bold text-center py-5 mb-7 border-b-[1.5px] border-gray-500">
        Form Data
      </h1>
      <p className="my-2 text-red-500 ml-4">
        *This data is fetching from MongoDB only for showing purpose
      </p>
      {userData.map((user, index) => (
        <div className="px-4" key={index}>
          <h2 className="text-xl font-bold my-2"> Personal Details</h2>
          <ul className="list-none">
            <li>Full Name: {user.fullName}</li>
            <li>Gender: {user.gender}</li>
            <li>Age: {user.age}</li>
            <li>Date of Birth: {user.dob}</li>
            <li>Phone: {user.phone}</li>
            <li>Email: {user.email}</li>
            <li>Permanent Address: {user.paddress}</li>
          </ul>
          <h2 className="text-xl font-bold my-2"> Business Details</h2>
          <ul>
            <li>Business Name: {user.businessName}</li>
            <li>Business Type: {user.businessType}</li>
            <li>GST No.: {user.gstno}</li>
            <li>Telephone: {user.telephone}</li>
            <li>Registration No: {user.registration}</li>
            <li>Email: {user.businessEmail}</li>
            <li>Office: {user.officeAddress}</li>
          </ul>
          <h2 className="text-xl font-bold my-2"> Loan Details</h2>
          <ul>
            <li>Loan Amount: {user.loanAmount}</li>
            <li>Loan Duration: {user.duration}</li>
            <li>Bank Name: {user.bankName}</li>
            <li>Bank Account No.: {user.bankAccNo}</li>
            <li>Interest Rate: {user.interest}</li>
            <li>Loan Tenure: {user.loanTenure}</li>
            <li>Loan Reason: {user.loanReason}</li>
          </ul>
          <hr className="my-5" />
        </div>
      ))}
    </div>
  );
};

export default ShowData;
