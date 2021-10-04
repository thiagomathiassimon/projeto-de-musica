import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "20%",
    textAlign: "center",
    flexWrap: "wrap",
  },
  logo: {
    display: "flex",
    height: "10px",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#4fbfff",
    padding: "5%",
    marginTop: "10%",
    marginBottom: "15%",
  },
  menuItems: {
    display: "flex",
    fontSize: "14px",
    fontWeight: "bolder",
    lineHeight: "16px",
    alignItems: "center",
    padding: "5% 5% 5% 5%",
    cursor: "pointer",
  },
  icons: {
    marginRight: "10%",
    marginLeft: "5%",
  },
  selectedItem: {
    backgroundColor: "#282828",
    display: "flex",
    fontSize: "14px",
    fontWeight: "bolder",
    lineHeight: "16px",
    alignItems: "center",
    padding: "2.5% 2.5% 2.5% 2.5%",
    cursor: "pointer",
    margin: "2.5%",
    borderRadius: "6px",
  },
  otherMenuItems: {
    marginTop: "15%",
    paddingBottom: "15%",
    borderBottom: "1px solid #282828",
  },
}));
