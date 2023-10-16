import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/Ent3ToEnt1.css";

function Ent3ToEnt1() {
  return (
    <Link to="/building/park-innovation">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-ent3-ent1"
      />
    </Link>
  );
}

export default Ent3ToEnt1;
