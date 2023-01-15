import { Rating } from "@mui/material";
import React from "react";
import { cardContent } from "../utils/data";

const Cards = ({ item }) => {
  return (
    <div className="cards">
      <Rating
        name="size-small"
        readOnly
        defaultValue={item.stars}
        precision={0.5}
        size="small"
      />
      <p>{item.feedback}</p>
      <h3>{item.name}</h3>
    </div>
  );
};
const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-header">
        <h2>They can prove it themselves about us</h2>
        <p>
          Some of the people below have felt the quality of our platform, you
          can give your testiminial below.
        </p>
      </div>
      <div className="testimonial-container">
        <div className="overall">
          <h3>Excellent</h3>
          <p>Based on 1k+ review</p>
        </div>
        <div className="testimonial-slider">
          {
            cardContent.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
