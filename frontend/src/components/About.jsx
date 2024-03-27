import Card from '../components/InformationCard/Card';
import 'animate.css';
import CommentBox1 from './Comments/CommentBox';
import CommentBox2 from './Comments/CommentBox2';
import CommentBox3 from './Comments/CommentBox3';
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
        <CommentBox1/>
        <CommentBox2/>
        <CommentBox3/>
        {/* <div className="grid grid-cols-2 gap-x-4 mt-16 w-95 h-screen">
        <div className="w-81 h-90 flex justify-center items-center border-4 border-blue-500">
          <img src="assets/FirstWebsite.png" alt="" className="w-full h-full" />
          <div className="mt-20">
          </div>
        </div>
        <div className="w-26 h-30 flex justify-center items-center border-4 border-blue-500">
          <img src={Chef} alt="" className="w-30 h-20" />
          <div className="mt-20">
          </div>
        </div>
        <div className="w-30 h-30 flex justify-center items-center border-4 border-blue-500">
          <img src={HomeFood} alt="" className="w-30 h-30" />
          <div className="mt-20">
          </div>
        </div>
        <div className="w-30 h-30 flex justify-center items-center border-4 border-blue-500">
          <img src="assets/TictacToe.png" alt="" className="w-30 h-30" />
          <div className="mt-20">
          </div>
        </div>
        </div> */}
    </div>
  );
}

export default About;
