import Amul from '../assets/foodlogos/Amul.jpg';
import goFood from '../assets/foodlogos/goFood.jpg';
import MTR from '../assets/foodlogos/MTR.png';
import UberEats from '../assets/foodlogos/UberEats.jpg';
import Swiggy from '../assets/foodlogos/Swiggy.png';
import Zomato from '../assets/foodlogos/Zomato.png';

function CarouselAnimation() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600">
      <div className="max-w-xl overflow-hidden relative">
        <div className="flex space-x-4">
          {/* Carousel items are put here */}
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

          {/* Add more carousel items as needed */}
        </div>
      </div>
    </div>
  );
}

export default CarouselAnimation;
