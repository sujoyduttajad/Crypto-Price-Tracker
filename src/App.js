import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CoinTable from './components/CoinTable'

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
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ))
  console.log(filteredCoins);

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className="coin-text">Crypto Price Tracker</h1>
        <form>
          <input 
            type="text" 
            placeholder="Search a currency"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {/* <div className="crypto-container">
        {
          filteredCoins.map(coin => {
            return (
              <Coin 
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
              />
            )
          })
        }
      </div> */}
      <div className="crypto-container">
        <CoinTable
          filteredCoins={filteredCoins}
        />
      </div>
      
    </div>
  );
}

export default App;
