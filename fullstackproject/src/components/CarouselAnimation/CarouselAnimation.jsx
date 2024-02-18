import Amul from '../../assets/foodlogos/Amul.jpg';
import goFood from '../../assets/foodlogos/goFood.jpg';
import MTR from '../../assets/foodlogos/MTR.png';
import UberEats from '../../assets/foodlogos/UberEats.jpg';
import Swiggy from '../../assets/foodlogos/Swiggy.png';
import Zomato from '../../assets/foodlogos/Zomato.png';
import './CarouselAnimation.css';

function CarouselAnimation() {
  return (
    <>
      <h1 className='bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-center text-custom text-4xl p-3'>Our Branding Partners are</h1>
      <div className="flex items-center justify-center bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600">
        <div className="max-w-xl overflow-hidden relative">
          <div className="flex space-x-4 overflow-hidden">
            {
              /*
              In order to not waste these several lines I am using these Array map functions

               <div className="w-32 p-1 rounded-md shadow-md">
            <img
              src={Amul}
              alt="Amul Logo"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="w-32 p-1 rounded-md shadow-md">
            <img
              src={goFood}
              alt="goFood Logo"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="w-32 p-1 rounded-md shadow-md">
            <img
              src={MTR}
              alt="MTR Logo"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="w-32 p-1 rounded-md shadow-md">
            <img
              src={UberEats}
              alt="UberEats Logo"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="w-32 p-1 rounded-md shadow-md">
            <img
              src={Swiggy}
              alt="Swiggy Logo"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="w-32 p-1 rounded-md shadow-md">
            <img
              src={Zomato}
              alt="Zomato Logo"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
              */
            }
            {/* Carousel items are put here */}
            {[Amul, goFood, MTR, UberEats, Swiggy, Zomato].map((logo, index) => (
              <div key={index} className="w-32 p-1 rounded-md shadow-md animate-slide-in">
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
