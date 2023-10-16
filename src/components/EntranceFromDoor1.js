import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/arrow.png";
import "../CssFolder/EntranceFromDoor1.css";

function ConfNavigateToEntrance() {
  return (
    
    <Link to="/building/park-innovation">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-conference-entrance"
      />
    
    </Link>
     
  );
}

export default ConfNavigateToEntrance;
