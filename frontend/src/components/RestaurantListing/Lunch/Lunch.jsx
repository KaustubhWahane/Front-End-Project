import PropTypes from 'prop-types';
import { Toaster, toast } from 'sonner';

const RestaurantListing = ({ name,  description, rating, image }) => {
  return (
    <>
    <div className="border inline-block border-gray-300 rounded p-4 m-4 max-w-md">
      <img src={image} alt={name} className="mb-4 rounded-md w-full h-40 object-cover" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p><span className="font-semibold">Description:</span> {description}</p>
      <p><span className="font-semibold">Rating:</span> {rating}/ 5</p>
      <Toaster richColors position="top-center"/>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"  onClick={() => toast.error('Have you signed it?')}>
                Add
              </button>
    </div>
    </>
  );
};

RestaurantListing.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default RestaurantListing;
