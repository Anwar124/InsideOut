import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/ErFromAngle1To2.css";

function ErFromAngle1To2() {
  return (
    <Link to="/building/park-innovation/angle2">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-conf-entrance"
      />
    </Link>
  );
}

export default ErFromAngle1To2;
