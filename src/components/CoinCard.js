import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useStyles } from "../materialUi/GlobalStyles";
import Tilt from "react-parallax-tilt";

const CoinCard = ({ data }) => {
  const classNamees = useStyles();
  return (
    <Tilt scale={0.95} transitionSpeed={300} gyroscope={true}>
      <div className="card">
        <Card classNameName={classNamees.card}>
          <CardContent>
            <div className="welcome">
              <Typography variant="h5" component="h2">
                {data.name}
              </Typography>
            </div>
            <div className="year">
              <Typography classNameName={classNamees.pos} color="textSecondary">
                Market Cap - {data.market_cap_rank}
              </Typography>
              <Typography classNameName={classNamees.pos} color="textSecondary">
                Community Score - {data.community_score}
              </Typography>
              <Typography classNameName={classNamees.pos} color="textSecondary">
                Coingecko Score - {data.coingecko_score}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </Tilt>
  );
};

export default CoinCard;
