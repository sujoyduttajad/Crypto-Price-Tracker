import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CoinCategories = ({ handleChange }) => {
  return (
    <>
      <Navbar handleChange={handleChange} />
      <div>CoinCategories</div>
      <Footer />
    </>
  );
};

export default CoinCategories;
