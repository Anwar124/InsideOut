import React from "react";
import Modeling from '../images/3dmodeling.jpeg';
import VirtualTour from "../images/vrtour.png";
import Interaction from "../images/Interaction.jpg";
import Character1 from "../images/character.png";
import "../CssFolder/Services.css";

function Services() {
  return (
    <div id="services">
      <div className="services-container">
        <div className="services-header">
          <h1>OUR SERVICES</h1>
        </div>
        <div className="services-body">
          <div className="image-place">
            <div className="service-image">
              <img src={VirtualTour} alt="VirtualTour"></img>
            </div>
          </div>
          <div className="service-description-place">
            <div className="service-description">
              <h2>Virtual Tour</h2>
              <p>
                Any Restaurant, Guest House, Company, Real Estate, and many
                more... InsideOut offers you the ultimate Virtual Tour!
              </p>
            </div>
          </div>
        </div>
        <div className="services-body1">
          <div className="image-place1">
            <div className="service-description1">
              <h2>Direct Interaction</h2>
              <p>
                Not a systematic tour. InsideOut will make you enjoy its
                meaningful interactivity.
              </p>
            </div>
          </div>
          <div className="service-description-place1">
            <div className="service-image1">
              <img src={Interaction} alt="DirectInteraction"></img>
            </div>
          </div>
        </div>
        <div className="services-body">
          <div className="image-place">
            <div className="service-image">
              <img src={Modeling} alt="3dModeling"></img>
            </div>
          </div>
          <div className="service-description-place">
            <div className="service-description">
              <h2>3D Modeling</h2>
              <p>
                Augmented and Virtual reality are booming. Our 3D modeling team
                is dedicated to enhance your business with the latest
                technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="services-body1">
          <div className="image-place1">
            <div className="service-description1">
              <h2>Live Guidance</h2>
              <p>
                A professional guide will make your tour beautiful and
                meaningful. Your unique business character is waiting for you!
              </p>
            </div>
          </div>
          <div className="service-description-place1">
            <div className="service-image1-char">
              <img src={Character1} alt="Guide"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
