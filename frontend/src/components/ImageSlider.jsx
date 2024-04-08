import { useState } from 'react';
import Photo from '../assets/Cook Food background.jpg';
import Photo2 from '../assets/FullIndianThaali.jpg'; 
import Photo3 from '../assets/FullIndianThaali2.jpg'; 

function CustomSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Photo, Photo2, Photo3];

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="custom-slider">
      <img src={images[currentImage]} alt={`Image ${currentImage}`} />
      <div className='absolute px-60 py-30 rounded-lg top-1/2 flex justify-between w-full'>
        <button className='bg-red-500 p-3 rounded-lg' onClick={prevSlide}>Previous</button>
        <button className='bg-red-500 p-3 rounded-lg' onClick={nextSlide}>Next</button>
      </div>
      <button className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-emerald-500 text-white px-4 py-2 rounded">
        Explore
      </button>
      
    </div>
  );
}

export default CustomSlider;
