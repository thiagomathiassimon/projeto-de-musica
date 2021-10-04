import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "76%",
    padding: "2%",
    backgroundColor: "#242424",
  },
  musicList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: "none",
    justifyContent: "space-between",
    padding: "0 10%",
    overflowY: "scroll",
    height: "calc(100% - (90px + 58px))",
  },
}));
