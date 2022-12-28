import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Exchange = ({ handleChange }) => {
  return (
    <>
      <Navbar handleChange={handleChange} />
      <div>Exchange</div>
      <Footer />
    </>
  );
};

export default Exchange;
