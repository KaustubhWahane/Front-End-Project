import PropTypes from 'prop-types';

const SignInButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Sign In
    </button>
  );
};

SignInButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SignInButton;
