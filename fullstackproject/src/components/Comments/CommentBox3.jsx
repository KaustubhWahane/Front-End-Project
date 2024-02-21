import { useState } from 'react';
import userProfile from '../../assets/UserProfile.jpg';

const commentsData2 = [
    {
        id: 8,
        author: 'Amit Kumar',
        text: 'The fusion of flavors on this website is a gastronomic delight!',
    },
    {
        id: 9,
        author: 'Neha Sharma',
        text: 'I never knew vegetarian dishes could be so exciting and flavorful until I found this site!',
    },
    {
        id: 10,
        author: 'Karan Patel',
        text: 'The cooking tips here have turned me into a kitchen maestro. Thanks a million!',
    }
];

const CommentBox3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === commentsData2.length - 1 ? 0 : prevIndex + 1));
  };

  const prevComment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? commentsData2.length - 1 : prevIndex - 1));
  };

  return (
    <div className="comment-container inline-flex justify-start items-center m-5">
      <div className="comment-box p-4 bg-gray-200 rounded-lg shadow-md">
        <div className="comment-profile">
          <img src={userProfile} alt="User Profile" className="w-12 h-12 rounded-full" />
        </div>
        <div className="comment-text">
          <p>{commentsData2[currentIndex].text}</p>
          <p className="font-semibold mt-2">- {commentsData2[currentIndex].author}</p>
        </div>
        <div className="comment-nav flex justify-between items-center">
          <button className="text-blue-500" onClick={prevComment}>
            Prev
          </button>
          <button className="text-blue-500" onClick={nextComment}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default CommentBox3;