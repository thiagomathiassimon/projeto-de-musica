import React from "react";
import { Box, Grid } from "@material-ui/core";

import { useStyles } from "./MainContent.styles";

import { MusicCard } from "../MusicCard";
import { musicBase } from "../../mock/musicBase";

export const MainContent = (props) => {
  const classes = useStyles();
  const musics = musicBase;

  const { isPlaying, setIsPlaying, setMusicIndex } = props;

  return (
    <Box className={classes.root}>
      <Grid container direction="column" marginBottom={6}>
        <h1>Minhas Músicas</h1>
        <h4>Selecione a música que deseja escutar</h4>
      </Grid>
      <Grid className={classes.musicList}>
        {musics?.map((music, index) => (
          <MusicCard
            key={music?.name + index}
            music={music}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setMusicIndex={setMusicIndex}
          />
        ))}
      </Grid>
    </Box>
  );
};
