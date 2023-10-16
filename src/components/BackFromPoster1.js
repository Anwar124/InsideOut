import React from "react";
import { Link } from "react-router-dom";
import Circle from "../images/goback.png";
import "../CssFolder/BackFromPoster1.css";

function GoBack1() {
  return (
    <Link to="/building/park-innovation/conference-room-angle2">
      <img
        src={Circle}
        alt="Navigate Circle"
        className="goback1"
      />
    </Link>
  );
}

export default GoBack1;
