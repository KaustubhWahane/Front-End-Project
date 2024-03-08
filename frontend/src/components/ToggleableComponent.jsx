import{ useState } from 'react';
import PropTypes from 'prop-types';
import SignInButton from './SignInButton'; 

const ToggleableComponent = ({ onSignIn }) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleToggle = () => {
    setShowSignIn((prev) => !prev);
  };

  return (
    <div>
      {showSignIn ? (
        <SignInButton onClick={onSignIn} />
      ) : (
        <button onClick={handleToggle}>
          Back
        </button>
      )}
    </div>
  );
};

ToggleableComponent.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default ToggleableComponent;
