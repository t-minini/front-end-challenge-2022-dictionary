// Material UI
import * as React from "react";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

// CSS
import "./WordCard.css";

export function WordCard() {
  return (
    <>
      <div className="card">
        <div className="word-container">
          <h1>hello</h1>
          <h2>həˈloʊ</h2>
        </div>
        <div className="player-container">
          <p>PLAYER HERE</p>
        </div>
        <div className="meaning-container">
          <h2>Meaning</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>
        <div className="btns-container">
          <Button variant="contained">
            <ArrowCircleLeftIcon />
            &nbsp;&nbsp;&nbsp;Back
          </Button>
          <Button variant="contained">
            Next&nbsp;&nbsp;&nbsp;
            <ArrowCircleRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
}
