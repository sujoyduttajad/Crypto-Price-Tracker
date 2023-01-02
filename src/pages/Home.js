import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import banner from "../images/home-banner.jpg";
import market from "../images/market-image.png"

const Home = ({ handleChange }) => {
  return (
    <>
      <Navbar handleChange={handleChange} />
      <section className="home-banner">
        <div className="image-container">
          <img src={banner} alt="banner" />
        </div>
        <div className="home-typograph">
          <h1>Keep track of your favorite Crypto Coins</h1>
          <p>Here you can learn, and track your favourite Cryptocurrencies</p>
        </div>
      </section>
      <section className="home-banner" style={{ paddingTop: "12rem"}}>
        <div>
            <img src={market} alt="market table" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
