import React from "react";
import { useQuery } from "react-query";
import CoinCard from "../components/CoinCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";

const EachCoin = ({ coinId }) => {
  // The data returned will be an object of the coin selected
  // and will contain all the relevant details
  const { data, isLoading, error } = useQuery("repoData", () =>
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <LoadingSpinner />;

  if (error) return "An error has occurred: " + error.message;

  // console.log(data);

  return (
    <>
      <Navbar coinId={coinId} />
      <section className="coin-info-container">
        <CoinCard data={data} />
      </section>
    </>
  );
};

export default EachCoin;
