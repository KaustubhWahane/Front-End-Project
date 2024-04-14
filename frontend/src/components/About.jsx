import Card from '../components/InformationCard/Card';
// Installing animate.css via npm for the slider effect 
import 'animate.css';
import CommentBox from './Comments/CommentBox';
import Carousel from '../components/CarouselAnimation/CarouselAnimation';
import GridContainer from './GridComponent/GridComponent';


function About() {
  return (
    <div id="about" className='bg-richChocolate'>
    <Carousel/>
    <br />
    <div className=" bg-richChocolate text-creamyVanilla m-10 p-8 rounded-lg shadow-lg mt-20 ">
      <p className="text-lg italic ">
        Indulge in a culinary adventure that transcends ordinary dining experiences. Our chefs, artisans of flavor, meticulously craft each dish to bring forth a symphony of tastes that will leave an indelible mark on your plate. 
        We pride ourselves on using only the freshest ingredients, sourced from the finest producers, ensuring every bite is a celebration of nature&apos;s bountiful offerings.
        Follow the alluring aromas that emanate from our kitchen, beckoning you to a realm where mouthwatering scents mingle with the promise of exquisite flavors. 
        Our menu, a global tapestry, takes you on a journey through diverse culinary landscapes, blending exotic spices and international influences.
      </p>
    </div>
    <br />
    <br />
    <br />
    <div className="mt-30">
      <Card />
    </div>
    <br />
    <h2 className="text-3xl p-3 bg-richChocolates font-extrabold text-center text-creamyVanilla rounded-lg shadow-lg mt-8">
      Community Buzz!!
    </h2>
      <CommentBox/>
    <div className="mt-8">
      <GridContainer/>
    </div>
  </div>
  
  );
}

export default About;
