import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useStyles } from "../materialUi/GlobalStyles";


const CoinCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {data.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Market Cap - {data.market_cap_rank}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Community Score - {data.community_score}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Coingecko Score - {data.coingecko_score}
        </Typography>
        <Typography variant="body2" component="p">
          {data.description.en}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
};

export default CoinCard;
