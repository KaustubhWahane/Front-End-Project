import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo from '../assets/Cook Food background.jpg';
import Photo2 from '../assets/FullIndianThaali.jpg'; // Import yer second image
import Photo3 from '../assets/FullIndianThaali2.jpg';  // Import yer third image

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="relative">
          {index === 0 && <img src={Photo} alt={`Error ${401 + index}`} width={1280} height={504} />}
          {index === 1 && <img src={Photo2} alt={`Error ${401 + index}`} width={1280} height={504} />}
          {index === 2 && <img src={Photo3} alt={`Error ${401 + index}`} width={1280} height={504} />}

          <button
            className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-emerald-500 text-white px-4 py-2 rounded"
          >
            Explore
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
