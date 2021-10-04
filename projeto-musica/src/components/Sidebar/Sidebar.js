import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./Sidebar.styles";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidebar}>
      <Box className={classes.logo}>
        <h1>🎼 Músicas</h1>
      </Box>
      <Box className={classes.selectedItem}>
        <HomeIcon className={classes.icons} />
        <a>Início</a>
      </Box>
      <Box className={classes.menuItems}>
        <SearchIcon className={classes.icons} />
        <a>Buscar</a>
      </Box>
      <Box className={classes.menuItems}>
        <LibraryMusicIcon className={classes.icons} />
        <a>Suas Bibliotecas</a>
      </Box>
      <Box className={classes.otherMenuItems}>
        <Box className={classes.menuItems}>
          <AddBoxIcon className={classes.icons} />
          <a>Criar playlist</a>
        </Box>
        <Box className={classes.menuItems}>
          <FavoriteIcon className={classes.icons} />
          <a>Músicas Curtidas</a>
        </Box>
      </Box>
    </Box>
  );
};
