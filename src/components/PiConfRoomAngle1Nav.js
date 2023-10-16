import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/arrow.png";
import "../CssFolder/PiConfRoomAngle1Nav.css";

function NavigateToPiCrAngle1() {
  return (
    <Link to="./conference-room-angle1">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image0"
      />
    </Link>
  );
}

export default NavigateToPiCrAngle1;
