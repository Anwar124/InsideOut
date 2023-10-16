import React from "react";
import { Link } from "react-router-dom";
import Circle from "../images/arrow.png";
import "../CssFolder/Ent2ToConf2.css";

function Ent2ToConf2() {
  return (
    <Link to="/building/park-innovation/conference-room-angle2">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-ent-conf2"
      />
    </Link>
  );
}

export default Ent2ToConf2;
