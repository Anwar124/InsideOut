import React from "react";
import { Link } from "react-router-dom";
import ParkDoor from "../images/doorPark.png";
import Building2 from "../images/building2.png";
import Building3 from "../images/building3.png";
import "../CssFolder/BoxesBuilding.css";

function BoxesBuilding() {
  return (
    <div className="scroll-container">
      <div className="flex-container">
        <Link to="/building/park-innovation" className="box">
          <p>Park Innovation</p>
          <img src={ParkDoor} alt="Park Innovation" />
        </Link>
        <Link to="/building" className="box">
          <p>Inside Out 1</p>
          <img src={Building3} alt="Real Estate" />
        </Link>
        <Link to="/building" className="box">
          <p>Inside Out 2</p>
          <img src={Building2} alt="Guest House" />
        </Link>
      </div>
    </div>
  );
}

export default BoxesBuilding;
