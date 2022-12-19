import React from "react";
import Tilt from "react-parallax-tilt";

const CoinCard = ({ data }) => {
 
  return (
    <div className="card-container">
    <Tilt scale={0.95} transitionSpeed={300} gyroscope={true}>
      <div className="card">
        <div className="welcome">
          <div className="image-container">
            <img src={data.image.small} alt={data.name} />
            <div>
              Rank #{data.market_cap_rank}
            </div>
          </div>
        </div>
        <div className="year">
          <div className="coin-title">
            <p>{data.name}</p>
          </div>
          <div className="market-info">
            <h2 >
              ${data.market_data.current_price.usd}{" "}
              {data.symbol.toUpperCase()}
            </h2>
          </div>
        </div>
      </div>
    </Tilt>
    </div>
  );
};

export default CoinCard;
