import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    fontFamily: "Montserrat",
  },
  tableContent: {
    fontFamily: "Montserrat",
    
  },
  tableRows: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 0,
    cursor: "auto",
  },
  avatar: {
    colorDefault: "purple",
  },
  coinChip: {
    cursor: "pointer",
    minWidth: "8rem"
  },
});
