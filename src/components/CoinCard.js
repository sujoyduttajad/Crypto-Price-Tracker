import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useStyles } from "../materialUi/GlobalStyles";
import Tilt from "react-parallax-tilt";

const CoinCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Tilt scale={0.95} transitionSpeed={300} gyroscope={true}>
      <div className="card">
        <Card className={classes.card}>
          <CardContent>
            <div className="welcome">
              {/* Image */}
              <img src={data.image.small} alt={data.name} />
            </div>
            <div className="year">
              <Typography className={classes.pos} color="textSecondary">
                {data.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {data.market_data.market_cap_change_24h}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {data.symbol.toUpperCase()}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </Tilt>
  );
};

export default CoinCard;
