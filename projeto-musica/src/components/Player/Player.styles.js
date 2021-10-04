import { makeStyles } from "@material-ui/styles";
import { Slider } from "@mui/material";
import { styled } from "@mui/system";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "#181818",
    height: "90px",
    position: "absolute",
    bottom: "0",
    left: "0",
    borderTop: "1px solid #282828",
  },
  icons: {
    color: "#fff",
  },
  players: {
    paddingLeft: "20%",
    width: "80%",
  },
  volume: {
    width: "15%",
    display: "flex",
    alignItems: "center",
  },
  volumeIcon: {
    marginRight: "15px",
  },
}));

export const MySlider = styled(Slider)({
  color: "#4fbfff",
});
