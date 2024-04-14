import Chef from '../../assets/People/Alcohol.jpg';
import HomeFood from '../../assets/People/Chef.jpg';
import Alcohol from '../../assets/People/HomeFood.jpg';

function GridContainer() {
  return (
    <div className="grid grid-cols-2 gap-4">
    <div className="row-span-2 p-4">
      <img src={Chef} alt="Chef" className="w-full h-auto rounded-lg" />
      <p className="text-center bg-richChocolate font-pacifico text-2xl text-creamyVanilla py-2 rounded-lg">Where flavors dance and spices sing!</p>
    </div>
    <div className="row-span-2 p-4">
      <img src={HomeFood} alt="Home Food" className="w-full h-auto rounded-lg" />
      <p className="text-center bg-richChocolate font-pacifico text-2xl text-creamyVanilla py-2 rounded-lg">Bringing comfort and joy, one dish at a time.</p>
    </div>
    <div className="p-4">
      <img src={Alcohol} alt="Sanjeev Kapoor" className="w-full h-auto rounded-lg" />
      <p className="text-center bg-richChocolate font-pacifico text-2xl text-creamyVanilla py-2 rounded-lg">Crafting culinary masterpieces with passion.</p>
    </div>
    <div className="p-4">
      <img src={Alcohol} alt="Alcohol" className="w-full h-auto rounded-lg" />
      <p className="text-center bg-richChocolate font-pacifico text-2xl text-creamyVanilla py-2 rounded-lg">Sipping on inspiration, stirring up creativity.</p>
    </div>
  </div>
  
  );
}

export default GridContainer;
