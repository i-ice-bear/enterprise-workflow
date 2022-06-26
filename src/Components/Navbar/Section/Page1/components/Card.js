import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./Allcomponent.css";

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={styleSheet} className="my-5">
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={props.image}
      />
      <CardContent style={{background:"transparent"}}>
        <h3 className="text-dark">{props.heading}</h3>
        <p className="text-dark">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </p>
      </CardContent>
      <CardActions>
        <Button size="small" className="my-2" id="main-container-button">Contact with us</Button>
      </CardActions>
    </Card>
  );
}

const styleSheet = {
  boxShadow:"none",
  backgroundColor:"none",
  transition:"all 0.3s ease",
  borderRadius:"25px",
  
}