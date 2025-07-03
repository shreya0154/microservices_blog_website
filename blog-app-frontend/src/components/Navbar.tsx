

// import { useEffect, useState } from 'react';
// import {useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.jpg';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();


//   useEffect(() => {
//     const onScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const goToCart = () => {
//     navigate('/cart');
//   };

//   const goToHome=()=>{
//     navigate('/');
//   }

//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
//     else {
//         navigate('/about-page')
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 h-19 transition-colors duration-300 ${
//         isScrolled ? 'text-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200' : 'text-white bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center h-full">
//         {/* <div className="text-xl font-bold"></div> */}
//         <img src={logo} alt="Logo" className="h-10 w-auto object-contain rounded" />
//         <div className="space-x-6">
//           <button onClick={goToHome} className={`px-4 py-2 rounded hover:text-white hover:bg-blue-600 transition ${
//             isScrolled ? 'text-gray-300':'text-gray-300'
//           }`}>
//             Home
//           </button>
//           <button onClick={() => scrollToSection('about')} className={`px-4 py-2 rounded hover:text-white hover:bg-blue-600 transition ${
//             isScrolled ? 'text-gray-300':'text-gray-300'
//           }`}>
//             About
//           </button>
//           <button onClick={goToCart} className={`px-4 py-2 rounded hover:text-white hover:bg-blue-600 transition ${
//             isScrolled ? 'text-gray-300':'text-gray-300'
//           }`}>
//             Cart
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

// function Navbar() {
//   return (
//     <header className="flex items-center justify-between px-6 py-4 bg-green-700 text-white">
//       <div className="flex items-center gap-4">
//         <h1 className="text-2xl font-bold">🌱 Mind Garden</h1>
//         <Link to="/explore" className="hover:underline">Explore</Link>
//         <Link to="/about" className="hover:underline">About</Link>
//       </div>
//       <div className="flex items-center gap-4">
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
//         <Link to="/login" className="hover:underline">Login</Link>
//         <Link to="/signup" className="hover:underline">Register</Link>
//       </div>
//     </header>
//   );
// }










import { FaSeedling, FaCamera, FaFeatherAlt, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white px-6 py-6 flex items-center justify-between shadow-md">
      {/* Left: Logo & Brand */}
      <div className="flex items-center space-x-3">
        <FaSeedling className="text-2xl text-lime-300" />
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          Mind Garden
        </Link>
        <div className="hidden md:flex space-x-6 ml-8">
          <Link to="/explore" className="hover:text-lime-200 transition">Explore</Link>
          <Link to="/about" className="hover:text-lime-200 transition">About</Link>
        </div>
      </div>

      {/* Right: Icons & Auth */}
      <div className="flex items-center space-x-4">
        {/* <FaCamera className="text-lg hover:text-lime-200 cursor-pointer" /> */}
        <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-300"
                    >
                      <FaInstagram size={20} />
                    </a>
        {/* <FaFeatherAlt className="text-lg hover:text-lime-200 cursor-pointer" /> */}

        <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300"
                    >
                      <FaTwitter size={20} />
                    </a>
        
        
        <Link to="/login" className="hover:text-lime-300 font-medium">Login</Link>
        <Link
          to="/register"
          className="bg-lime-400 hover:bg-lime-500 text-green-900 px-3 py-1.5 rounded-md font-semibold transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
