import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/PiWorkingStaffRoom.css";

function NavigateToPiWrkStf() {
  return (
    <Link to="./working-staff">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image3"
      />
    </Link>
  );
}

export default NavigateToPiWrkStf;
