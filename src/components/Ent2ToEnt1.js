import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/Ent2ToEnt1.css";

function Ent2ToEnt1() {
  return (
    <Link to="/building/park-innovation">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-ent2-ent1"
      />
    </Link>
  );
}

export default Ent2ToEnt1;
