import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5 text-center text-4xl font-bold bg-gray-50 w-full border-b-[1.5px] border-gray-200">
      <span onClick={() => navigate("/")}>Loan Form</span>
    </div>
  );
};

export default Navbar;
