import React, { lazy, Suspense } from "react";
import { useQuery } from "react-query";
import Footer from "../components/Footer";
import Info from "../components/Info";
import LoadingSpinner from "../components/LoadingSpinner";
import MarketInfo from "../components/MarketInfo";
import Navbar from "../components/Navbar";
import PriceStatistics from "../components/PriceStatistics";

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

  console.log(data);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar coinId={coinId} />
      <section className="coin-info-container">
        <CoinCard data={data} />
        <Info data={data} />
      </section>
      <section className="coin-info-container">
        <MarketInfo data={data} />
      </section>
      <section className="coin-info-container">
        <PriceStatistics data={data} />
      </section>
      <Footer />
    </Suspense>
  );
};

export default EachCoin;
