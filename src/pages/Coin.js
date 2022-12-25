import React, { lazy, Suspense } from "react";
import { useQuery } from "react-query";
import Info from "../components/Info";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";

const CoinCard = lazy(() => import("../components/CoinCard"));

const EachCoin = ({ coinId }) => {
  // The data returned will be an object of the coin selected
  // and will contain all the relevant details
  const { data, isLoading, error } = useQuery("repoData", async () =>
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <LoadingSpinner />;

  if (error) return "An error has occurred: " + error.message;

  // console.log(data);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar coinId={coinId} />
      <section className="coin-info-container">
        <CoinCard data={data} />
        <Info data={data} />
      </section>
    </Suspense>
  );
};

export default EachCoin;
