import React from 'react'
import './Coin.css'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className="coin-symbol">({symbol})</p>
                </div>
                <div className="coin-data">
                    <div className="container-1">
                        <p className="coin-price">
                            <span>Price: </span><p>${price}</p>
                        </p>
                    </div>
                    <div className="container-2">
                        <p className="coin-volume">
                            <span>Volume: </span><p>${volume.toLocaleString()}</p>
                        </p>
                    </div>
                    <div className="container-3">{priceChange < 0 ? (
                        <p className="coin-percent">
                            <span>Coin-Percent: </span><p className="red">{priceChange.toFixed(2)}%</p>
                        </p>
                    ) : (
                        <p className="coin-percent">
                            <span>Coin-Percent: </span><p className="green">{priceChange.toFixed(2)}%</p>
                        </p>
                    )}</div>
                    <div className="container-4">
                        <p className="coin-marketcap">
                            <span>Mkt Cap:</span>  
                            <p>{"$"+marketcap.toLocaleString()}</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin
