import axios from "axios";
import * as React from "react";
import { useEffect, useState, useRef } from "react";

// MUI Sound Player
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";

// CSS
import "./WordCard.css";

export function WordCard() {
  // Favorite Icon MUI
  const [favorited, setFavorited] = React.useState(false);

  // Dictionary API
  const [dictionary, setDictionary] = useState();
  const [selectedWord, setSelectedWord] = useState("hello");

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`
        );
        setDictionary(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDictionary();
  }, [selectedWord]);

  console.log(dictionary);

  // Music Player
  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayer = useRef(); //reference audio component

  const play = () => {
    const prevValue = isPlaying;
    setIsPlaying(prevValue);
    audioPlayer.current.play();
  };

  return (
    !!dictionary && (
      <>
        <div className="card">
          <div className="word-container">
            <div className="favorite">
              <IconButton
                aria-label={favorited ? "favorite" : "not-favorite"}
                onClick={() => setFavorited(!favorited)}
                disableRipple={true}
              >
                {favorited ? (
                  <StarBorderIcon sx={{ fontSize: "2rem" }} />
                ) : (
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    style={{ color: "#ffa000" }}
                  />
                )}
              </IconButton>
            </div>
            <div>
              <h1>{dictionary.word}</h1>
              <h2>{dictionary.phonetics[1].text}</h2>
            </div>
          </div>

          <div className="audio-player">
            <audio
              ref={audioPlayer}
              src={dictionary.phonetics[1].audio}
              preload="metadata"
            ></audio>
            <button className="player-btn" onClick={play}>
              <PlayArrowRounded sx={{ fontSize: "3rem" }} />
            </button>
          </div>
          <div className="meaning-container">
            <h2>Meaning</h2>
            <p>{dictionary.meanings[0].definitions[0].definition}</p>
            <div className="btns-container">
              <Button variant="contained" size="medium">
                back
              </Button>
              <Button variant="contained" size="medium">
                next
              </Button>
            </div>
          </div>
        </div>
      </>
    )
  );
}
