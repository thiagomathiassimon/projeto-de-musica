import React from "react";
import { Box, Grid, IconButton } from "@material-ui/core";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import LoopIcon from "@mui/icons-material/Loop";

import { MySlider, useStyles } from "./Player.styles";
import { VolumeUp } from "@material-ui/icons";

export const Player = (props) => {
  const classes = useStyles();

  const {
    isPlaying,
    setIsPlaying,
    firstMusicPath,
    musicIndex,
    musicBase,
    setMusicIndex,
  } = props;

  const tagAudio = document.getElementById("saidaAudio");

  return (
    <Box className={classes.root}>
      <Grid justifyContent="center" className={classes.players}>
        <IconButton>
          <ShuffleIcon className={classes.icons} fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => {
            let newIndex = 0;
            let newPath = "";
            if (musicIndex === 0) {
              newIndex = musicBase.length - 1;
              newPath = musicBase[newIndex].path;
            } else {
              newIndex = musicIndex - 1;
              newPath = musicBase[newIndex].path;
            }
            setMusicIndex(newIndex);
            setIsPlaying(true);
            tagAudio.src = newPath;
            tagAudio.play();
          }}
        >
          <SkipPreviousIcon className={classes.icons} fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => {
            setIsPlaying(!isPlaying);

            isPlaying ? tagAudio.pause() : tagAudio.play();

            if (tagAudio.src === "" && !isPlaying) {
              tagAudio.src = firstMusicPath;
              tagAudio.play();
            }
          }}
        >
          {!isPlaying ? (
            <PlayCircleIcon className={classes.icons} fontSize="large" />
          ) : (
            <PauseCircleIcon className={classes.icons} fontSize="large" />
          )}
        </IconButton>
        <IconButton
          onClick={() => {
            let newIndex = 0;
            let newPath = "";
            if (musicIndex === musicBase.length - 1) {
              newIndex = 0;
              newPath = musicBase[newIndex].path;
            } else {
              newIndex = musicIndex + 1;
              newPath = musicBase[newIndex].path;
            }
            setMusicIndex(newIndex);
            setIsPlaying(true);
            tagAudio.src = newPath;
            tagAudio.play();
          }}
        >
          <SkipNextIcon className={classes.icons} fontSize="small" />
        </IconButton>
        <IconButton>
          <LoopIcon className={classes.icons} fontSize="small" />
        </IconButton>
      </Grid>
      <Grid className={classes.volume}>
        <VolumeUp className={classes.volumeIcon} />
        <MySlider />
      </Grid>
    </Box>
  );
};
