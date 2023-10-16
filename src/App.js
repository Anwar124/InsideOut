import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Building from "./components/Building";
import MainEntrancePiAngle1 from "./components/PiEntranceRoom";
import CrPiPoster from "./components/CrPiPoster";
import CrPiAngle2 from "./components/CrPiAngle2";
import CrPiAngle1 from "./components/CrPiAngle1";
import PiWorkingStaff from "./components/PiWorkingStaff";
import PiPrograms from "./components/ProgramsConfRoom";
import PiErAngle2 from "./components/PiEntranceRoomAngle2";
import ContactUs from "./components/ContactUs";
import ModelViewer from "./model";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/building" element={<Building />} />
        <Route
          path="/building/park-innovation"
          element={<MainEntrancePiAngle1 />}
        />
        <Route
          path="/building/park-innovation/cr-pi-poster"
          element={<CrPiPoster />}
        />
        <Route
          path="/building/park-innovation/pi-programs"
          element={<PiPrograms />}
        />
        <Route
          path="/building/park-innovation/conference-room-angle1"
          element={<CrPiAngle1 />}
        />
        <Route
          path="/building/park-innovation/conference-room-angle2"
          element={<CrPiAngle2 />}
        />
        <Route
          path="/building/park-innovation/working-staff"
          element={<PiWorkingStaff />}
        />
        <Route
          path="/building/park-innovation/angle2"
          element={<PiErAngle2 />}
        />
        <Route
          path="/contact"
          element={<ContactUs />}
        />
        <Route
          path="/model"
          element={<ModelViewer />}
        />
      </Routes>
    </Router>
  );
}

export default App;
