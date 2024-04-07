import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import ToggleableComponent from './components/ToggleableComponent';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

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
          <Switch> {/* Use Switch here to define your routes */}
            <Route exact path="/">
              {isSignedIn ? <ToggleableComponent onSignIn={handleSignIn} /> : <Home />}
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
