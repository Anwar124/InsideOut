import React from "react";
import TC from "../images/TC.jpeg";
import JB from "../images/JB.jpeg";
import EM from "../images/EM.jpg";
import MZ from "../images/MZ.jpg";
import "../CssFolder/Testimonials.css";

function Testimonials() {
  return (
    <div id="testimonials">
      <div className="testim-header">
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="all-container">
        <div className="testimonials-container">
          <div className="testim-body">
            <div className="image-name">
              <img src={EM} alt="insideBuilding"></img>
              <p>,,</p>
              <h3>Elon Musk AI</h3>
            </div>
            <div className="testimonial">
              <p>
                I've been using this web app for a while now, and I'm blown away
                by its simplicity and effectiveness. It has made my life so much
                easier. Highly recommended!
              </p>
            </div>
          </div>
        </div>
        <div className="testimonials-container1">
          <div className="testim-body1">
            <div className="image-name1">
              <img src={JB} alt="insideBuilding"></img>
              <p>,,</p>
              <h3>Jeff Bezos AI</h3>
            </div>
            <div className="testimonial1">
              <p>
                My experience with this web app has been exceptional. As someone
                looking to buy a home, I appreciate the user-friendly interface.
                It made the house-hunting process enjoyable and efficient. I
                found my dream home faster than I expected, thanks to this
                fantastic tool.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="all-container">
        <div className="testimonials-container">
          <div className="testim-body">
            <div className="image-name">
              <img src={MZ} alt="insideBuilding"></img>
              <p>,,</p>
              <h3>Mark Zuckerberg AI</h3>
            </div>
            <div className="testimonial">
              <p>
                Our business saw a significant boost in productivity after
                implementing this web app into our daily operations. It saved us
                valuable time and resources. Thank you!
              </p>
            </div>
          </div>
        </div>
        <div className="testimonials-container1">
          <div className="testim-body1">
            <div className="image-name1">
              <img src={TC} alt="insideBuilding"></img>
              <p>,,</p>
              <h3>Tim Cook AI</h3>
            </div>
            <div className="testimonial1">
              <p>
                As a tech enthusiast, I've tried numerous web apps, and this one
                stands out. The user interface is intuitive, and the features
                are cutting-edge. It's a must-try for anyone in the tech world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
