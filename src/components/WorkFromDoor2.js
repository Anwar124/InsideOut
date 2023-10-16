import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/arrow.png";
import "../CssFolder/WorkFromDoor2.css";

function ConfNavigateToWork() {
  return (
    <Link to="/building/park-innovation/working-staff">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-conf-work"
      />
    </Link>
  );
}

export default ConfNavigateToWork;
