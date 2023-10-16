import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/arrow.png";
import "../CssFolder/EntranceFromDoor1Angle2.css";

function ConfNavigateToEntranceAngle2() {
  return (
    <Link to="/building/park-innovation">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-conf-entrance-angle2"
      />
    </Link>
  );
}

export default ConfNavigateToEntranceAngle2;
