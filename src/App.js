import React, { useState } from "react";
import "./styles/global.scss";
import { Routes, Route } from "react-router-dom";
import EachCoin from "./pages/Coin";
import Exchange from "./pages/Exchange";
import CoinCategories from "./pages/CoinCategories";
import { useQuery } from "react-query";
import LoadingSpinner from "./components/LoadingSpinner";
import Market from "./pages/Market";
import Home from "./pages/Home";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
   const [coinId, setCoinId] = useState();

  const { data, isLoading, error } = useQuery("data", () =>
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
      .then((res) => {
        const dataRes = res.json();
        setCoins(dataRes);
        return dataRes;
      })
      .catch((error) => console.log(error))
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
    e.currentTarget.style.width = "90rem";
    e.currentTarget.style.transition =
      "all 1.2s cubic-bezier(0.5, 0, 0.5, 1)";
  };

  const filteredCoins = () =>
    data?.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

  // **** Very IMPORTANT - DO NOT DELETE **** 
  // isLoading is a Boolean value that comes from react-query
  // It's True - when Promise is pending; False when Promise is fulfilled
  
  if (isLoading) return <LoadingSpinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="wrapper">
    <Routes>
      <Route
        path="/"
        element={<Home handleChange={handleChange} filteredCoins={filteredCoins()} />}
      />
      <Route
        path="/market"
        exact
        element={
          <Market
            filteredCoins={filteredCoins()}
            handleChange={handleChange}
            setCoinId={setCoinId}
          />
        }
      />
      <Route
        path="/exchange"
        exact
        element={<Exchange handleChange={handleChange} />}
      />
      <Route
        path="/categories"
        exact
        element={<CoinCategories handleChange={handleChange} />}
      />
      <Route path="/market/:ID" element={<EachCoin coinId={coinId} />} />
    </Routes>
    </section>
  );
}

export default App;
