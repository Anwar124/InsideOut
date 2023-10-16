import React, { useEffect, useState } from 'react';

function ImageRotation({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Image ${index + 1}`}
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

export default ImageRotation;
