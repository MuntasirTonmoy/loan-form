import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import ShowData from "./components/ShowData/ShowData";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/data" element={<ShowData />} />
      </Routes>
    </>
  );
}

export default App;
