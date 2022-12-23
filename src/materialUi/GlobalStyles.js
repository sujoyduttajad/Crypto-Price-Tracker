import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    fontFamily: "Montserrat",
  },
  tableContent: {
    fontFamily: "Montserrat",
    
  },
  tablehHead: {
    cursor: "context-menu",
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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    padding: "0.6em 0em"
  },
  card: {
    width: "100%",
    fontFamily: '',
    background: "transparent"
  },
  chipStyles: {
    borderRadius: "4px",
    fontSize: "2rem",
    fontWeight: 700,
  }
});
