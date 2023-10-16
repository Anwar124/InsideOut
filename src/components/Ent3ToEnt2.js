import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/circle1.png";
import "../CssFolder/Ent3ToEnt2.css";

function Ent3ToEnt2() {
  return (
    <Link to="/building/park-innovation/working-staff">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-ent3-ent2"
      />
    </Link>
  );
}

export default Ent3ToEnt2;
