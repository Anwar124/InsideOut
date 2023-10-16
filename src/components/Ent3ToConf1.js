import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../images/arrow.png";
import "../CssFolder/Ent3ToConf1.css";

function Ent3ToConf1() {
  return (
    <Link to="/building/park-innovation/conference-room-angle1">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-ent3-conf1"
      />
    </Link>
  );
}

export default Ent3ToConf1;
