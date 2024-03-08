import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import ToggleableComponent from './components/ToggleableComponent';

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div className={`bg-${isSignedIn ? 'green' : 'slate'}-500`}>
      <NavBar isSignedIn={isSignedIn} onSignIn={handleSignIn} onSignOut={handleSignOut} scrollToSection={scrollToSection} />
      <div className="content-container">
        {(isSignedIn ? (
          <ToggleableComponent onSignIn={handleSignIn} />
        ) : (
          <>
            <Home />
            <About />
            <ContactUs />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
