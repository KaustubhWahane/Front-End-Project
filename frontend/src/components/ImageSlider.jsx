import { useState } from 'react';
// Using from React-Bootstrap
import { Carousel } from 'react-bootstrap';
import Photo from '../assets/Cook Food background.jpg';
import Photo2 from '../assets/FullIndianThaali.jpg'; 
import Photo3 from '../assets/FullIndianThaali2.jpg'; 

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Photo, Photo2, Photo3];

  const handleSelect = (selectedIndex) => {
    setCurrentImage(selectedIndex);
  };

  return (
    <Carousel activeIndex={currentImage} onSelect={handleSelect}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="w-100" src={image} alt={`Slide ${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlider;
