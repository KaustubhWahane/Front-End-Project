import Card from '../components/InformationCard/Card';
import 'animate.css';
import CommentBox from './Comments/CommentBox';
import Carousel from '../components/CarouselAnimation/CarouselAnimation';
import Chef from '../assets/People/Chef.jpg';
import HomeFood from '../assets/People/HomeFood.jpg';

  // Card Details
  const exampleCard = {
    title: "Example Card",
    description: "This be an example card description.",
    link: "example-link",
  };

function About() {
  return (
    <div id="about" className='bg-yellow-500'>
        <Carousel/>
        <div className="bg-yellow-200 text-red-500 m-10 p-8 rounded-lg shadow-lg">
            <p className="text-lg italic">
            Indulge in a culinary adventure that transcends ordinary dining experiences. Our chefs, artisans of flavor, meticulously craft each dish to bring forth a symphony of tastes that will leave an indelible mark on your plate. 
            We pride ourselves on using only the freshest ingredients, sourced from the finest producers, ensuring every bite is a celebration of nature&apos;s bountiful offerings.
            Follow the alluring aromas that emanate from our kitchen, beckoning you to a realm where mouthwatering scents mingle with the promise of exquisite flavors. 
            Our menu, a global tapestry, takes you on a journey through diverse culinary landscapes, blending exotic spices and international influences.
            </p>
        </div>
        <Card {...exampleCard} />
        <br />
        <h2 className="text-3xl font-extrabold text-center text-blue-500 p-4 rounded-lg shadow-lg  bg-yellow-200" style={{ margin: 'auto', padding: '10px' }}>
        Community Buzz!!
        </h2>
        <CommentBox  />
        <div className='flex border-black w-full h-50'>

        </div>
    </div>
  );
}

export default About;
