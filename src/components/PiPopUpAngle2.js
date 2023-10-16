import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/PiPopUpAngle2.css";

function ConfNavigateToPopUpAngle2() {
  return (
    <Link to="/building/park-innovation/cr-pi-poster">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-conf-popup-angle2"
      />
    </Link>
  );
}

export default ConfNavigateToPopUpAngle2;
