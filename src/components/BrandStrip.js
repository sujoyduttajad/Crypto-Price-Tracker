import React from "react";
import { brands } from "../utils/data";

const BrandStrip = () => {
  return (
    <section className="brandstrip">
      {brands.map((brand) => (
        <img src={brand.image} alt={brand.name} />
      ))}
    </section>
  );
};

export default BrandStrip;
