import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  /*
   Another method of doing it however there is a flaw
  const handleSignIn = () => {
    setIsSignedIn(isSignedIn => !isSignedIn);
  */ 
  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };


  return (
    <Router>
      <div className={`bg-${isSignedIn ? 'green' : 'slate'}-500`}>
      <NavBar isSignedIn={isSignedIn} onSignIn={handleSignIn} onSignOut={handleSignOut} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;