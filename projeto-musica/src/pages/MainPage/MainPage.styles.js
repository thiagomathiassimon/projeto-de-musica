import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    height: "calc(100% - 90px)",
  },
}));
