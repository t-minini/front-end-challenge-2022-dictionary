import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// import Grid from "@mui/material/Grid"; // Grid version 1

import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import "./WordCard.css";

export function WordCard() {
  return (
    <>

      <div className="card">
        <h1>hello</h1>
        <h2>həˈloʊ</h2>
        <p>PLAYER</p>
        <h3>Meaning</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        <div className="card-btn">
          <Button variant="contained">
            <ArrowCircleLeftIcon />
            Back
          </Button>
          <Button variant="contained">
            Next
            <ArrowCircleRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
}
