import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/global.scss";
import CoinTable from "./pages/CoinTable";
import { Routes, Route } from "react-router-dom";
import EachCoin from "./components/EachCoin";
import { useSelector } from "react-redux";
import Exchange from "./pages/Exchange";
import CoinCategories from "./pages/CoinCategories";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  // const [coin, setCoin] = useState({});

  // const eachCoinId = useSelector((state) => state.eachCoin);
  // console.log(eachCoinId);

  // This might be a problem and needs to be changed
  // useQuery could be a good option
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   axios.get(`https://api.coingecko.com/api/v3/coins/${eachCoinId}`)
  //   .then(res => {
  //     setCoin(res.data);
  //     setLoading(false);
  //   })
  //   .catch(error => console.log(error))
  // }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <div className="coin-app">
      <Routes>
        <Route
          path="/"
          exact
          element={
            !loading ? (
              <CoinTable
                filteredCoins={filteredCoins}
                handleChange={handleChange}
                setLoading={setLoading}
              />
            ) : (
              <p>Loading...</p>
            )
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
        <Route
          path="/:ID"
          element={!loading ? <EachCoin setLoading={setLoading} /> : <p>Loading...</p>}
        />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
