import { cardsData } from './Data';

function Card () {
  return (
    <div className="flex justify-center items-center mt-12 ml-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-4">
        {cardsData.map(({ title, description}, index) => (
          <div key={index} className="bg-white w-64 p-2 rounded-lg shadow-md">
            {title && <h1 className="mt-2 ml-2 text-xl font-semibold">{title}</h1>}
            {description && <p className="mt-2 ml-2 text-sm">{description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
