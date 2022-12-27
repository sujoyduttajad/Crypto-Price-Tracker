export const headCells = [
  {
    id: "rank",
    numeric: true,
    disablePadding: true,
    label: "#Rank",
  },
  {
    id: "image",
    numeric: false,
    disablePadding: true,
    label: "",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Token Name",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price(USD)",
  },
  {
    id: "volume",
    numeric: true,
    disablePadding: false,
    label: "Volume(USD)",
  },
  {
    id: "coinPercent",
    numeric: true,
    disablePadding: false,
    label: "24h Change",
  },
  {
    id: "mktCap",
    numeric: true,
    disablePadding: false,
    label: "Market Cap(USD)",
  },
];

export const cryptoData = [
  {
    para: `Market Cap = Current Price x Circulating Supply
    
    Refers to the total market value of a cryptocurrency’s circulating supply. It is similar to the stock market’s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)`,
  },
  {
    para: `A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times.`,
  },
  {
    para: `FDV = Current Price x Max Supply (or total supply if max supply is invalid)

    The market capitalization (valuation) if the max supply of a coin is in circulation. Note that it can take 3, 5, 10 or more years before the FDV can be reached, depending on how the emission schedule is designed.`,
  },
  {
    para: `The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments).`,
  },
  {
    para: `
    The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market.
    
    Total Supply = Onchain supply - burned tokens`,
  },
  {
    para: `
    The maximum number of coins coded to exist in the lifetime of the cryptocurrency. It is comparable to the maximum number of issuable shares in the stock market.
    
    Max Supply = Theoretical maximum as coded`,
  },
];
