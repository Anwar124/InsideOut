import React, { useState, useEffect, useRef } from "react";
import "../CssFolder/HeaderInside.css";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} ref={sidebarRef}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        &#9776;
      </button>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/building/park-innovation">Entrance Angle 1</a>
          </li>
          <li>
            <a href="/building/park-innovation/angle2">Entrance Angle 2</a>
          </li>
          <li>
            <a href="/building/park-innovation/working-staff">Staff</a>
          </li>
          <li>
            <a href="/building/park-innovation/conference-room-angle1">
              Conference Room Front
            </a>
          </li>
          <li>
            <a href="/building/park-innovation/conference-room-angle2">
              Conference Room Back
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
