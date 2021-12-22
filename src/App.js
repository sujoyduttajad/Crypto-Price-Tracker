import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/global.scss';
import CoinTable from './components/CoinTable'
import Navbar from './components/Navbar'

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error))
  }, []);

  // const getCryptoCoinData = async () => {
  //   const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'); 
  //   const coinData = await response.json();
  //   setCoins(coinData.data);
  //   console.log(coins);
  // }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ))
  // console.log(filteredCoins);

  return (
    <div className="coin-app">
      <Navbar
        handleChange={handleChange} 
      />
      <div className="crypto-container">
        <CoinTable
          filteredCoins={filteredCoins}
        />
      </div>
      
    </div>
  );
}

export default App;
