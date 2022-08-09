import React from "react";
import Navbar from "../components/Navbar";

const CoinCategories = ({ handleChange }) => {
  return (
    <>
      <Navbar handleChange={handleChange} />
      <div>CoinCategories</div>
    </>
  );
};

export default CoinCategories;
