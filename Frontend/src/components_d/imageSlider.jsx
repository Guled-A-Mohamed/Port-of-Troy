import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide (loops back to 0 at the end)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
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
    return <p className="text-center my-4">No images to display</p>;
  }

  return(
<div className="container my-4">
      {/* Main Slideshow Box */}
      <div className="slideshow-container position-relative mx-auto rounded shadow overflow-hidden">
        
        {/* Key forces React to re-trigger the CSS fade animation on slide change */}
        <div key={currentIndex} className="mySlides fade-animation">
          <div className="numbertext">
            {currentIndex + 1} / {images.length}
          </div>
          
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].caption || 'Slide'}
            className="img-fluid w-100 slide-image"
          />
          
          <div className="caption-text">
            {images[currentIndex].caption}
          </div>
        </div>

        {/* Next & Previous Buttons */}
        <button 
          className="prev" 
          onClick={prevSlide} 
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button 
          className="next" 
          onClick={nextSlide} 
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="text-center mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`dot border-0 ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );

};

export default ImageSlider;
