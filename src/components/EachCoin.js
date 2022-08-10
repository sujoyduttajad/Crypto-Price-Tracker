import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { update, add } from "../features/eachCoinSlice";

const EachCoin = ({ setLoading }) => {
  const dispatch = useDispatch();
  const coinState = useSelector((state) => state.eachCoin);
  console.log(coinState);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinState}`)
      .then((res) => {
        dispatch(add({ coin: res.data }));
        setLoading(false);
        // console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Cpoiny</h1>
    </div>
  );
};

export default EachCoin;
