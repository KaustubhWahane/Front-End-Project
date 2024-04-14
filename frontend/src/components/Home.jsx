import { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import Breakfast from './RestaurantListing/Breakfast/Breakfast';
import Lunch from './RestaurantListing/Lunch/Lunch';
import { restaurantData } from './RestaurantListing/Breakfast/Data';
import { restaurantLunch } from './RestaurantListing/Lunch/Data';
import { Toaster, toast } from 'sonner';

function Home() {
  const [mealData, setMealData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData()  {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const result = await response.json();
      setMealData(result?.meals);
    } catch (err) {
      console.error('Error fetching data:', err.message);
      setError(<div>
        <h1 className='text-center text-4xl text-black'>Oops! Sorry couldn&apos;t show the dishes!</h1>
      </div>);
    } 
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div id="home" className="bg-orange-500">
        <p className="text-white text-center text-5xl p-4">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div id="home" className="bg-orange-500">
        <h2 className="text-center font-extrabold font-serif bg-red-700">Home Page</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div id="home" className="bg-orange-500">
      <ImageSlider />
      <br /> <br/>
      <div>
        <h1 className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-center text-custom text-4xl p-3">
          Here&apos;s the various International food in a simplified way!
        </h1>
        <div className="flex flex-wrap justify-around items-center">
          {mealData?.map((meal) => (
            <div key={meal?.idMeal} className="border border-black p-4 m-4 w-64 h-96 rounded-lg flex flex-col items-center">
              <div className="w-full">
                <img src={meal?.strMealThumb} alt={meal?.strMeal} className="w-full rounded-t-lg" />
              </div>
              <div className="mt-2 font-bold">{meal?.strMeal}</div>
              <div className="text-gray-600">{meal?.strCategory}</div>
              <Toaster richColors position="top-center"/>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => toast.error('Have you signed in?')}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Breakfasts */}
      <h1 className="bg-gray-400 text-center text-custom text-4xl p-3">Grab your Breakfast!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {restaurantData.map((data, index) => (
          <Breakfast key={index} {...data} />
        ))}
      </div>

      {/* Lunch */}
      <h1 className="bg-gray-400 text-center text-custom text-4xl p-3">What&apos;s for dinner?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {restaurantLunch.map((data, index) => (
          <Lunch key={index} {...data} />
        ))}
        </div>
    </div>
  );
}

export default Home;
