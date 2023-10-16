import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/Ent2ToEnt3.css";

function Ent2ToEnt3() {
  return (
    <Link to="/building/park-innovation/angle2">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-ent2-ent3"
      />
    </Link>
  );
}

export default Ent2ToEnt3;
