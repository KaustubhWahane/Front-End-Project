import Carousel from './CarouselAnimation';
import ImageSlider from './ImageSlider';
import { useState , useEffect } from 'react';

function Home() {
  const [meal_data, set_meal_data] = useState([]);

//Using Meal Api to fetch all the data so I can make a grid view of all the food items

  const get_data = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const result = await res.json();
      set_meal_data(result?.meals);
    }
    catch (err) {
      console.log(`Handling error!`);
      console.log(err);
    }
  };
 
  useEffect(() => {
    get_data();
  }, []);

  return (
    <div id="home">
      <h2 className='text-center font-extrabold font-serif bg-red-700'>Home Page</h2>
      <ImageSlider/>
        <div className="bg-yellow-500 text-red-500 m-10 p-8">
          <p className="text-lg">
          Indulge in a culinary adventure that transcends ordinary dining experiences. Our chefs, artisans of flavor, meticulously craft each dish to bring forth a symphony of tastes that will leave an indelible mark on your plate. 
          We pride ourselves on using only the freshest ingredients, sourced from the finest producers, ensuring every bite is a celebration of nature&apos;s bountiful offerings.
          Follow the alluring aromas that emanate from our kitchen, beckoning you to a realm where mouthwatering scents mingle with the promise of exquisite flavors. 
          Our menu, a global tapestry, takes you on a journey through diverse culinary landscapes, blending exotic spices and international influences.
          </p>
        </div>
        <div>
        <h1 className='bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-center text-custom text-4xl p-3'>Here&apos;s the simplified view of our Menu</h1>
        <div className="flex flex-wrap justify-around items-center">
  {meal_data?.map((meal) => (
    <div key={meal?.idMeal} className="border border-black p-4 m-4 w-64 h-96 rounded-lg flex flex-col items-center">
        <div className="w-full">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="w-full rounded-t-lg"
          />
        </div>
        <div className="mt-2 font-bold">{meal?.strMeal}</div>
        <div className="text-gray-600">{meal?.strCategory}</div>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
          Add
        </button>
      </div>
    ))}
        </div>
        </div>
        <Carousel/>
    </div>
    // Add more dishes by writing there names and specials of it
  );
}

export default Home;
