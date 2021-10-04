import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const MusicCard = (props) => {
  const { music, setIsPlaying, musicIdex, setMusicIndex } = props;

  const [actualMusic, setActualMusic] = React.useState("");

  const tagAudio = document.getElementById("saidaAudio");

  React.useEffect(() => {
    setActualMusic(music?.path);
  }, [music]);

  return (
    <Card
      sx={{
        maxWidth: 200,
        minWidth: 150,
        minHeight: 200,
        maxHeight: 300,
        backgroundColor: "#141414",
        color: "#fff",
        marginBottom: "15px",
        cursor: "pointer",
      }}
      onClick={() => {
        tagAudio.src = actualMusic;
        tagAudio.play();
        setIsPlaying(true);
        setMusicIndex(musicIdex);
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image="https://us.123rf.com/450wm/rondale/rondale1508/rondale150800268/44249913-golden-metallic-music-note-sign-music-icon.jpg?ver=6"
        alt="music"
      />
      <CardContent>
        <h4>{music?.name}</h4>
        <h5>{music?.artist}</h5>
        <h6>{music?.album}</h6>
      </CardContent>
    </Card>
  );
};
