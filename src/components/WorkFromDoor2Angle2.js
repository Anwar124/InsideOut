import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/arrow.png";
import "../CssFolder/WorkFromDoor2Angle2.css";

function ConfNavigateToWorkAngle2() {
  return (
    <Link to="/building/park-innovation/working-staff">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-conf-work-angle2"
      />
    </Link>
  );
}

export default ConfNavigateToWorkAngle2;
