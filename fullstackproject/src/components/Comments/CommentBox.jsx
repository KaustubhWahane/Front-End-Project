import { useState } from 'react';
import userProfile from '../../assets/UserProfile.jpg';

const commentsData1 = [
  {
    id: 5,
    author: 'Rajeev Gokhale',
    text: 'This website spiced up me life with the best curry recipes in the seven seas!',
  },
  {
    id: 6,
    author: 'Priya Deshmukh',
    text: 'Discovered delightful street food secrets here that made me taste buds dance with joy!',
  },
  {
    id: 7,
    author: 'Ananya Pandey',
    text: 'In the culinary voyage of flavors, this site guided me to the perfect biryani recipe.',
  },
];

const CommentBox1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === commentsData1.length - 1 ? 0 : prevIndex + 1));
  };

  const prevComment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? commentsData1.length - 1 : prevIndex - 1));
  };

  return (
    <div className="comment-container inline-flex justify-center items-center m-5">
      <div className="comment-box p-4 bg-gray-200 rounded-lg shadow-md">
        <div className="comment-profile">
          <img src={userProfile} alt="User Profile" className="w-12 h-12 rounded-full" />
        </div>
        <div className="comment-text">
          <p>{commentsData1[currentIndex].text}</p>
          <p className="font-semibold mt-2">- {commentsData1[currentIndex].author}</p>
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

export default CommentBox1;