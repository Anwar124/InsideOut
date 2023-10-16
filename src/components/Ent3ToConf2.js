import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/arrow.png";
import "../CssFolder/Ent3ToConf2.css";

function Ent3ToConf2() {
  return (
    <Link to="/building/park-innovation/conference-room-angle2">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-ent3-conf2"
      />
    </Link>
  );
}

export default Ent3ToConf2;
