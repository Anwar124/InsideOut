import React, { useState, useEffect, useRef } from "react";
import Circle from "../images/circle1.png";
import "../CssFolder/ParkInnovationPopUpCircle.css";
import "../CssFolder/ParkInnovationPopUp.css";

function OpenPiDescriptionPopUp() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <img
        src={Circle}
        alt="Navigate Circle"
        className="circle-image-pi-desc"
        onClick={togglePopup}
      />
      {isPopupOpen && (
        <div className="popup" ref={popupRef}>
          <h3>WHAT IS PARK INNOVATION</h3>
          <p>
            Park Innovation is a community project and business incubator based
            in Semkanieh, Chouf. The Park offers several unique streams and
            resources to empower tech entrepreneurs and tech employment. Visit
            our website to learn about our central programs, Coding Bootcamp,
            and Pre-Acceleration (PushStart and TechDreamer). Park Innovation is
            playing its role in supporting the knowledge economy for the greater
            technological potential for the Chouf and all of Lebanon.
          </p>
          <a href="https://park-innovation.com/about/" target="_blank">
            <button className="website-button">Know More</button>
          </a>
          <button className="close-button" onClick={togglePopup}>
            ✕
          </button>
        </div>
      )}

    </div>
  );
}

export default OpenPiDescriptionPopUp;
