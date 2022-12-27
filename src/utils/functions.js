
export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  export const regexFormat = (param) => {
    return param.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };