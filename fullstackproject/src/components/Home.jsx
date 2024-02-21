import Carousel from '../components/CarouselAnimation/CarouselAnimation';
import ImageSlider from './ImageSlider';
import RestaurantListing from './RestaurantListing/RestaurantListing';
import { restaurantData } from '../components/RestaurantListing/Data';
import { useState , useEffect } from 'react';


function Home() {
  // Using Meal Api to fetch all the data so I can make a grid view of all the food items
  const [meal_data, set_meal_data] = useState([]);
  // This is used for error handling state
  const [error, setError] = useState(null);

const get_data = async () => {
  try {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');

    // Check if the fetch was successful
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const result = await res.json();
    set_meal_data(result?.meals);
  } catch (err) {
    console.error('Error fetching data:', err.message);
    setError('Oops! Something went wrong while fetching the data. Please try again later.');
  }
};

useEffect(() => {
  get_data();
}, []);

// Render the error message if there is an error
if (error) {
  return (
    <div id="home">
      <h2 className='text-center font-extrabold font-serif bg-red-700'>Home Page</h2>
      <p className="text-red-500">{error}</p>
    </div>
  );
}

  return (
    <div id="home">
      <h2 className='text-center font-extrabold font-serif bg-red-700'>Home Page</h2>
      <ImageSlider/>
      <br /> <br/>
        <div>
        <h1 className='bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-center text-custom text-4xl p-3'>Here&apos;s the various International food in a simplified way! </h1>
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
      <h2 className='flex justify-center bg-red-700'>About Us Page</h2>
        <Carousel/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {restaurantData.map((data, index) => (
        <RestaurantListing key={index} {...data} />
      ))}
    </div>
    </div>
  );
}

export default Home;
