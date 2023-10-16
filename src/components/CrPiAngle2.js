import React from "react";
import parkCrAngle2 from "../images/conferenceRoomAngle2.png";
import ConfNavigateToConfAngle1 from "./Angle1FromTopLeft";
import ConfNavigateToWorkAngle2 from "./WorkFromDoor2Angle2";
import ConfNavigateToEntranceAngle2 from "./EntranceFromDoor1Angle2";
import ConfNavigateToPopUpAngle2 from "./PiPopUpAngle2";
import ConfNavigateToProgramsPopUpAngle2 from "./ProgramsPopUpAngle2";
import HeaderInside from './HeaderInside';
import '../CssFolder/CrPiAngle2.css';
import { Link } from 'react-router-dom';

function CrPiAngle2() {
  return (
    <div className="parkCrAngle2-container">
      <img src={parkCrAngle2} className="parkCrAngle2-first-image" alt="Park Innovation Conference Room"></img>
      <ConfNavigateToConfAngle1 />
      <ConfNavigateToWorkAngle2 />
      <ConfNavigateToEntranceAngle2 />
      <ConfNavigateToPopUpAngle2 />
      <ConfNavigateToProgramsPopUpAngle2 />
      <HeaderInside />
      <Link to="/model" className="button-threedee">
        <svg className="button-3d" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-3d" viewBox="0 0 16 16">
  <path d="M4.52 8.368h.664c.646 0 1.055.378 1.06.9.008.537-.427.919-1.086.919-.598-.004-1.037-.325-1.068-.756H3c.03.914.791 1.688 2.153 1.688 1.24 0 2.285-.66 2.272-1.798-.013-.953-.747-1.38-1.292-1.432v-.062c.44-.07 1.125-.527 1.108-1.375-.013-.906-.8-1.57-2.053-1.565-1.31.005-2.043.734-2.074 1.67h1.103c.022-.391.383-.751.936-.751.532 0 .928.33.928.813.004.479-.383.835-.928.835h-.632v.914zm3.606-3.367V11h2.189C12.125 11 13 9.893 13 7.985c0-1.894-.861-2.984-2.685-2.984H8.126zm1.187.967h.844c1.112 0 1.621.686 1.621 2.04 0 1.353-.505 2.02-1.621 2.02h-.844v-4.06z"/>
  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
</svg>
      </Link>
    </div>
  );
}

export default CrPiAngle2;
