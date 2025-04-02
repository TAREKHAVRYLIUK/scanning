import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 p-4 text-white flex justify-between shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">Fresh Vegetables</h1>
      <ul className="flex gap-6 text-lg">
        <li className="hover:text-yellow-300 transition"><Link to="/">Home</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/assortment">Assortment</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/about">About Us</Link></li>
        <li className="hover:text-yellow-300 transition"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <section className="text-center p-10 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <img src="/mnt/data/iStock-620003040-1024x683.webp" alt="Fresh Vegetables" className="w-2/3 md:w-1/2 rounded-lg shadow-md border border-gray-300" />
      <p className="mt-6 text-xl text-gray-700 font-semibold max-w-xl">We provide fresh and organic vegetables directly from our farm to your table.</p>
    </section>
  );
};

const Assortment = () => {
  return (
    <section className="p-10 bg-white text-center min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Our Assortment</h2>
      <ul className="list-none text-lg text-gray-800 space-y-2">
        <li className="p-2 bg-green-100 rounded-lg">Tomatoes</li>
        <li className="p-2 bg-green-100 rounded-lg">Cucumbers</li>
        <li className="p-2 bg-green-100 rounded-lg">Carrots</li>
        <li className="p-2 bg-green-100 rounded-lg">Bell Peppers</li>
      </ul>
    </section>
  );
};

const About = () => {
  return (
    <section className="p-10 bg-gray-100 text-center min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-4">About Us</h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">We are passionate about bringing the best quality vegetables to our customers with sustainable and eco-friendly farming practices.</p>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="p-10 bg-white text-center min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700">Follow us on social media:</p>
      <ul className="flex justify-center gap-6 mt-4 text-lg text-green-600">
        <li><a href="#" className="hover:underline">Facebook</a></li>
        <li><a href="#" className="hover:underline">Instagram</a></li>
        <li><a href="#" className="hover:underline">Twitter</a></li>
      </ul>
    </section>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assortment" element={<Assortment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
