import React from 'react'

const EachCoin = ({coin}) => {

console.log(coin)
    return (
        <div>
            <h1>{coin.symbol}</h1>
        </div>
    )
}

export default EachCoin
