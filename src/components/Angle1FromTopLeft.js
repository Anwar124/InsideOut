import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/Angle1FromTopLeft.css";

function ConfNavigateToConfAngle1() {
  return (
    <Link to="/building/park-innovation/conference-room-angle1">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-confAngle1-confAngle1"
      />
    </Link>
  );
}

export default ConfNavigateToConfAngle1;
