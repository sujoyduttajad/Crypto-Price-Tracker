import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { update, add } from "../features/eachCoinSlice";
import { useQuery } from "react-query";

const EachCoin = ({ setLoading, coinId }) => {
  const dispatch = useDispatch();
  const coinState = useSelector((state) => state.eachCoin);
  console.log(coinState);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.coingecko.com/api/v3/coins/${coinState}`)
  //     .then((res) => {
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const { data, error } = useQuery("repoData", () =>
    fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`).then((res) =>
      res.json()
    )
  );

  if (error) return 'An error has occurred: ' + error.message;

  console.log(data)

  return (
    <section className="coin-app">
      <h1>Cpoiny</h1>
    </section>
  );
};

export default EachCoin;
