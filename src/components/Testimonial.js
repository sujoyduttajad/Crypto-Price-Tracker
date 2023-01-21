import { Grid, Rating } from "@mui/material";
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
        <h2>Our customers can prove it themselves about us</h2>
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
          <Grid container rowSpacing={2} columnSpacing={1}>
            {cardContent.map((item) => (
              <Grid key={item.id} item lg={4} md={4} sm={12}>
                <Cards key={item.id} item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
