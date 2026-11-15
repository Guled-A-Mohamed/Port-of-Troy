import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide (loops back to 0 at the end)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length -1 : prevIndex - 1
    );
  }
  
  // Move to the previous slide (loops to the end from 0)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance every 3 seconds
  useEffect(() => {
    // Don't start a timer if there are no images
    if (!images || images.length === 0) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup: clear the timer when the component unmounts OR when currentIndex changes
    // (Resetting on currentIndex change ensures the 3s timer restarts if the user clicks manually)
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  if (!images || images.length === 0) {
    return <p>No images to display</p>
  }

  return(
    <div>
      <div className="slideshow-container">
        {/* Render only the active slide */}
        <div className="mySlides fade">
          <div className="numbertext">
            {currentIndex + 1} / {images.length}
          </div>
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].caption || 'Slide'} 
            style={{ width: '100%' }} 
          />
          <div className="text">{images[currentIndex].caption}</div>
        </div>

        {/* Next and previous buttons */}
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>

      <br />

      {/* Dots / indicators */}
      <div style={{ textAlign: 'center' }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );

};

export default ImageSlider;
