import { cardsData } from './Data';

function Card() {
  return (
  <div className="flex justify-center items-center mt-12 ml-3">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-4">
      {cardsData.map(({ title, description }, index) => (
        <div
          key={index}
          className="bg-gray-400 w-80 h-100 p-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          {title && (
            <h1 className="mt-2 ml-2 text-xl italic font-semibold">{title}</h1>
          )}
          {description && (
            <p className="mt-2 ml-2 italic text-sm">{description}</p>
          )}
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Card;
