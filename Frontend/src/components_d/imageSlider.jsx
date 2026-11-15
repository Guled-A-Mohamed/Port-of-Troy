import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  let [currentIndex, setCurrentIndex] = useState(0);
  showSlides(currentIndex);


  return(
    <p>hi</p>
  );

};

export default ImageSlider;
