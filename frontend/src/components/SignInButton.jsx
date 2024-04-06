import { useState } from 'react';
import LoginBackground from '../assets/SignInPage.jpg';

function SignInButton() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    if (!username || !password) {
      setError('Please fill in all fields!');
    } else {
      setError('');
      setIsSignedIn(true);
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  const handleSignOut = () => {
    setUsername('');
    setPassword('');
    setIsSignedIn(false);
  };

  return (
    <div
    className={`min-h-screen flex items-center justify-center ${
      isSignedIn ? 'bg-green-100' : 'bg-gray-100'
    }`}
    style={{
      backgroundImage: `url(${LoginBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {isSignedIn ? (
          <>
            <h2 className="text-3xl font-semibold mb-6 text-center">Ahoy, Chef {username}!</h2>
            <button
              type="button"
              onClick={handleSignOut}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-6 text-center">Welcome to the Cooking Crew!</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                  Chef&apos;s Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your chef's name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Secret Recipe
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your secret recipe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='current-password'
                />
              </div>

              <button
                type="button"
                onClick={handleSignIn}
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none"
              >
                Let&apos;s Cook!
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default SignInButton;
