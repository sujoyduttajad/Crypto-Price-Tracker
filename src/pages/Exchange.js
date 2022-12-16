import React from "react";
import Navbar from "../components/Navbar";

const Exchange = ({ handleChange }) => {
  return (
    <section className="coin-app">
      <Navbar handleChange={handleChange} />
      <div>Exchange</div>
    </section>
  );
};

export default Exchange;
