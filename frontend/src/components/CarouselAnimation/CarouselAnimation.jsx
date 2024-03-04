import { useEffect, useRef } from 'react';
import Amul from '../../assets/foodlogos/Amul.jpg';
import goFood from '../../assets/foodlogos/goFood.jpg';
import MTR from '../../assets/foodlogos/MTR.png';
import UberEats from '../../assets/foodlogos/UberEats.jpg';
import Swiggy from '../../assets/foodlogos/Swiggy.png';
import Zomato from '../../assets/foodlogos/Zomato.png';
import './CarouselAnimation.css';

function CarouselAnimation() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const rect = carousel.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if the top of the carousel is within the viewport
        if (rect.top < windowHeight) {
          carousel.classList.add('animate-slide-in', 'animate-infinite');
        } else {
          carousel.classList.remove('animate-slide-in', 'animate-infinite');
        }
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', onScroll);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <h1 className='bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-center text-custom text-4xl p-3'>Our Branding Partners are</h1>
      <div ref={carouselRef} className="flex items-center justify-center bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600">
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
