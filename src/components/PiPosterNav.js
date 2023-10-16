import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/PiPosterNav.css";

function NavigateToPiPoster() {
  return (
    <Link to="/building/park-innovation/cr-pi-poster">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image"
      />
    </Link>
  );
}

export default NavigateToPiPoster;
