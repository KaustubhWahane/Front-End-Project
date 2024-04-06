import { useState } from 'react';
import PropTypes from 'prop-types'
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
      <div className={`comment-box p-6 bg-gray-200 rounded-lg shadow-md`}>
        <div className="comment-profile flex justify-center items-center">
          <img src={userProfile} alt="User Profile" className="w-12 h-12 rounded-full" />
        </div>
        <div className="comment-text flex justify-center items-center">
          <p>{commentsData[currentIndex].text}</p>
        </div>
            <p className="font-semibold text-center">- {commentsData[currentIndex].author}</p>
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

CommentBox.propTypes = {
  commentsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};


export default CommentBox;
