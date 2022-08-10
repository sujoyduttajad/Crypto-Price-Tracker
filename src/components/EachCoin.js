import React from "react";
import { useDispatch, useSelector } from "react-redux";

const EachCoin = ({ coin }) => {
  const coinState = useSelector((state) => state.eachCoin);
  console.log(coinState);
  return (
    <div>
      <h1>Cpoiny</h1>
    </div>
  );
};

export default EachCoin;
