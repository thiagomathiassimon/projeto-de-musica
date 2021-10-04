import React, { useState } from "react";
import { MainContent, Sidebar, Player } from "../../components";
import { Box } from "@material-ui/system";

import { useStyles } from "./MainPage.styles";
import { musicBase } from "../../mock/musicBase";

export const MainPage = () => {
  const classes = useStyles();

  const [isPlaying, setIsPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);

  return (
    <>
      <Box flex={true} className={classes.root}>
        <Sidebar className={classes.sidebar} />
        <MainContent
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setMusicIndex={setMusicIndex}
        />
        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          firstMusicPath={musicBase[0].path}
          musicBase={musicBase}
          musicIndex={musicIndex}
          setMusicIndex={setMusicIndex}
        />
      </Box>
    </>
  );
};
