import { useState } from 'react';
import userProfile from '../../assets/UserProfile.jpg';
import { commentsData } from './comments';

const CommentBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === commentsData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevComment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? commentsData.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <div className={`p-6 bg-gray-200 rounded-lg shadow-md`}>
        <div className="comment-profile flex justify-center items-center">
          <img src={userProfile} alt="User Profile" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          {commentsData.map((comment, index) => (
            <div key={comment.id} style={{ display: index === currentIndex ? 'block' : 'none' }}>
              <p>{comment.text}</p>
              <p className="font-semibold text-center">- {comment.author}</p>
            </div>
          ))}
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


export default CommentBox;
