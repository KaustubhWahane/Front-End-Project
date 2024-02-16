// src/components/NavBar.js
import PropTypes from 'prop-types';


NavBar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

function NavBar({ scrollToSection }) {
  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <>
<nav className="flex justify-between items-center w-[92%] mx-auto">
  <div className="flex"> 
    <div className="flex items-center py-3 gap-6">
      <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
      <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
    </div>
    <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] right-0 top-[-100%] md:w-auto w-full flex items-center px-5">
      <ul className="flex md:flex-row flex-col md:items-end md:gap-[4vw] gap-8 justify-end">
        <li>
          <a className="hover:text-gray-500" href="#" onClick={() => handleItemClick("home")}>
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500" href="#" onClick={() => handleItemClick("about")}>
            About
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500" href="#" onClick={() => handleItemClick("contact")}>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <h1>Welcome to the Cooking Website</h1>
  </div>
</nav>



    </>
  );
}

export default NavBar;
