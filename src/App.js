import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/global.scss';
import CoinTable from './components/CoinTable'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      setLoading(false);
    })
    .catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ))
  console.log(filteredCoins);
  console.log(loading);

  return (
          <div className="coin-app">
            <Navbar
              handleChange={handleChange} 
            />
            <Routes>
                <Route path="/" element={
                  !loading ? 
                  <CoinTable filteredCoins={filteredCoins} />
                   : <p>Loading...</p> } 
                />
            </Routes>
          </div>
  );
}

export default App;
