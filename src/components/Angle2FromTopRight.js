import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/Angle2FromTopRight.css";

function ConfNavigateToConfAngle2() {
  return (
    <Link to="/building/park-innovation/conference-room-angle2">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-confAngle1-confAngle2"
      />
    </Link>
  );
}

export default ConfNavigateToConfAngle2;
