import React from 'react';
import { Link } from 'react-router-dom';
import Building5 from "../images/building2.png";
import ParkDoor from '../images/doorPark.png';
import Building3 from "../images/building3.png";
import '../CssFolder/Boxes.css';

function Boxes() {
  return (
    <div className="scroll-container-home">
      <div className="flex-container-home">
        <Link to="/building/park-innovation" className="box-home-park">
          <p>Park Innovation</p>
          <img src={ParkDoor} alt="Park Innovation" />
        </Link>
        <Link to="/" className="box-home">
          <p>InsideOut 1</p>
          <img src={Building3} alt="Inside Out 1" />
        </Link>
        <Link to="/" className="box-home">
          <p>InsideOut 2</p>
          <img src={Building5} alt="Outside In" />
        </Link>
      </div>
    </div>
  );
}

export default Boxes;
