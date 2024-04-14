import Chef from '../../assets/People/Alcohol.jpg';
import HomeFood from '../../assets/People/Chef.jpg';
import Kapoor from '../../assets/People/HomeFood.jpg';
import Alcohol from '../../assets/People/Sanjeevkapoor.jpeg';

function GridContainer() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="row-span-2 p-4">
        <img src={Chef} alt="Chef" className="w-full h-auto rounded-lg" />
      </div>
      <div className="row-span-2 p-4">
        <img src={HomeFood} alt="Home Food" className="w-full h-auto rounded-lg" />
      </div>
      <div className="p-4">
        <img src={Kapoor} alt="Sanjeev Kapoor" className="w-full h-auto rounded-lg" />
      </div>
      <div className="p-4">
        <img src={Alcohol} alt="Alcohol" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
}

export default GridContainer;
