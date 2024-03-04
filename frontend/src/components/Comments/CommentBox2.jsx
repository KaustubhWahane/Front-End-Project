import { useState } from 'react';
import userProfile from '../../assets/UserProfile.jpg';

const commentsData2 = [
  {
    id: 1,
    author: 'Sakshi Singh',
    text: 'This website really helped me to choose my soulmate!! (Schezwan Manchurian Noodles)',
  },
  {
    id: 2,
    author: 'Varun Choudhary',
    text: 'The food quality is top-notch!',
  },
  {
    id: 3,
    author: 'Priya Deshmukh',
    text: 'It\'s so unique and they have even authentic dishes too!!!',
  },
  {
    id: 4,
    author: 'Rajat Khanna',
    text: 'Ye\'ve created a masterpiece in the digital realm!',
  },
];

const CommentBox2 = () => {
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
export default CommentBox2;