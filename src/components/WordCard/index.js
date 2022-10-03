// Material UI
import * as React from "react";
import Button from "@mui/material/Button";

// Material UI Sound Player
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// import yellow from "@material-ui/core/colors/yellow";

// CSS
import "./WordCard.css";

// Sound Player Material UI
const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  paddingBottom: 0,
  paddingTop: 10,
  borderRadius: 16,
  // width: 343,
  maxWidth: "100%",
  // margin: "auto",
  // position: "relative",
  // zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

// Star Favorite Material UI

export function WordCard() {
  
  // Sound Player Material UI
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  const [favorited, setFavorited] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
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
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  // htmlColor={mainIconColor}
                />
              ) : (
                <StarIcon
                  sx={{ fontSize: "2rem" }}
                  // htmlColor={mainIconColor}
                  style={{ color: "#ffa000" }}
                />
              )}
            </IconButton>
          </div>
          <div>
            <h1>hello</h1>
            <h2>həˈloʊ</h2>
          </div>
        </div>
        <div className="player-container">
          <Box sx={{ width: "100%" }}>
            <Widget>
              <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value)}
                sx={{
                  color:
                    theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                  height: 3,
                  "& .MuiSlider-thumb": {
                    width: 8,
                    height: 8,
                    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                    "&:before": {
                      boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === "dark"
                          ? "rgb(255 255 255 / 16%)"
                          : "rgb(0 0 0 / 16%)"
                      }`,
                    },
                    "&.Mui-active": {
                      width: 20,
                      height: 20,
                    },
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.28,
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: -2,
                }}
              >
                <TinyText>{formatDuration(position)}</TinyText>
                <TinyText>-{formatDuration(duration - position)}</TinyText>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: -2,
                }}
              >
                <IconButton
                  aria-label={paused ? "play" : "pause"}
                  onClick={() => setPaused(!paused)}
                >
                  {paused ? (
                    <PlayArrowRounded
                      sx={{ fontSize: "2rem" }}
                      htmlColor={mainIconColor}
                    />
                  ) : (
                    <PauseRounded
                      sx={{ fontSize: "2rem" }}
                      htmlColor={mainIconColor}
                    />
                  )}
                </IconButton>
              </Box>
            </Widget>
          </Box>
        </div>
        <div className="meaning-container">
          <h2>Meaning</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
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
  );
}
