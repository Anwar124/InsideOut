import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/PiConfRoomAngle2Nav.css";

function NavigateToPiCrAngle2() {
  return (
    <Link to="./conference-room-angle2">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image2"
      />
    </Link>
  );
}

export default NavigateToPiCrAngle2;
