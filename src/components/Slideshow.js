import React, { useState, useEffect } from "react";
import Building1 from "../images/building1.png";
import Building2 from "../images/building2.png";
import Building3 from "../images/building3.png";
import "../CssFolder/Slideshow.css";

function Slideshow() {
  const images = [Building1, Building2, Building3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 5) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (  
    <div className="all-slide">
      <div className="slideshow">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
