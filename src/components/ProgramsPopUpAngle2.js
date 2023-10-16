import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/ProgramsPopUpAngle2.css";

function ConfNavigateToProgramsPopUpAngle2() {
  return (
    <Link to="/building/park-innovation/pi-programs">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-conf-programs-popup-angle2"
      />
    </Link>
  );
}

export default ConfNavigateToProgramsPopUpAngle2;
