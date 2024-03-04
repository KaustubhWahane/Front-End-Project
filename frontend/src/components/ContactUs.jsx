function ContactUs() {
  return (
    <div id="contact">
    <footer className="bg-gray-800 py-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
            <h4 className="text-white text-2xl mb-8 font-semibold relative">Company</h4>
            <ul className="list-none">
              <li><a href="#" className="text-gray-500 text-lg hover:text-black transition">about us</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-black transition">our services</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-black transition">privacy policy</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-black transition">affiliate program</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
            <h4 className="text-white text-2xl mb-8 font-semibold relative">Get help</h4>
            <ul className="list-none">
              <li><a href="#" className="text-gray-500 text-lg hover:text-black transition">FAQ</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-black transition">shipping</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-black transition">returns</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-black transition">order status</a></li>
              <li><a href="#" className="text-gray-500 text-lg hover:text-black transition">payment options</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
            <h4 className="text-white text-2xl mb-8 font-semibold relative">Online shop</h4>
            <ul className="list-none">
              <li><a href="#" className="playfair-display-font text-2xl font-playfair-display-italic font-bold text-gray-500 hover:text-black transition">watch</a></li>
                <li><a href="#" className="playfair-display-font text-2xl font-playfair-display-italic font-bold text-gray-500 hover:text-black transition">bag</a></li>
                <li><a href="#" className="playfair-display-font text-2xl font-playfair-display-italic font-bold text-gray-500 hover:text-black transition">shoes</a></li>
                <li><a href="#" className="playfair-display-font text-2xl font-playfair-display-italic font-bold text-gray-500 hover:text-black transition">dress</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
            <h4 className="text-white text-2xl mb-8 font-semibold relative">Follow us</h4>
            <div className="flex">
              {/* Social Icons */}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default ContactUs;
