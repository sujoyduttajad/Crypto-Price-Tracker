import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/global.scss";
import CoinTable from "./pages/CoinTable";
import { Routes, Route } from "react-router-dom";
import EachCoin from "./pages/EachCoin";
import { useSelector } from "react-redux";
import Exchange from "./pages/Exchange";
import CoinCategories from "./pages/CoinCategories";
import { useQuery } from "react-query";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // This might be a problem and needs to be changed
  // useQuery could be a good option
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //     )
  //     .then((res) => {
  //       setCoins(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const { data, error } = useQuery("data", () =>
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    ).then((res) => {
      res.json();
      setCoins(data);
      setLoading(false);
    })
  );

  if (loading) return <LoadingSpinner />;

  if (error) return "An error has occurred: " + error.message;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <CoinTable
            filteredCoins={filteredCoins}
            handleChange={handleChange}
            setLoading={setLoading}
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
      <Route path="/:ID" element={<EachCoin setLoading={setLoading} />} />
    </Routes>
  );
}

export default App;
