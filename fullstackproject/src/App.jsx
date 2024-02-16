import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  return (
    <div className='bg-slate-500'>
      <NavBar scrollToSection={scrollToSection} />
      <Home />
      <About />
      <ContactUs />
    </div>
  );
}

export default App;