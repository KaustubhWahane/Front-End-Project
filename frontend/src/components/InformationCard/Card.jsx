import { cardsData } from './Data';

function Card() {
  return (
    <div className="flex justify-center items-center ml-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-richChocolate w-80 h-100 p-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h1 className="mt-2 ml-2 text-creamyVanilla text-xl italic font-semibold">{card.title}</h1>
            <p className="mt-2 ml-2 text-creamyVanilla italic text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
