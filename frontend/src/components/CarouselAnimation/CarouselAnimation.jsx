import { useState, useLayoutEffect } from 'react';
import Amul from '../../assets/foodlogos/Amul.jpg';
import goFood from '../../assets/foodlogos/goFood.jpg';
import MTR from '../../assets/foodlogos/MTR.png';
import UberEats from '../../assets/foodlogos/UberEats.jpg';
import Swiggy from '../../assets/foodlogos/Swiggy.png';
import Zomato from '../../assets/foodlogos/Zomato.png';
import './CarouselAnimation.css';

function CarouselAnimation() {
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    // Delay the animation by a short time to allow the component to render first
    const timeoutId = setTimeout(() => {
      setAnimate(true);
    }, 100);

    // Cleanup: clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <h1 className='bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-center text-custom text-4xl p-3'>Our Branding Partners are</h1>
      <div className={`flex items-center justify-center bg-yellow-500 ${animate ? 'animate-slide-in animate-infinite' : ''}`}>
        <div className="max-w-xl overflow-hidden relative">
          <div className="flex space-x-4 overflow-hidden">
            {/* Carousel items are put here */}
            {[Amul, goFood, MTR, UberEats, Swiggy, Zomato].map((logo, index) => (
              <div key={index} className="w-32 p-1 rounded-md shadow-md">
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            ))}
            {/* Add more here if you want */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselAnimation;
