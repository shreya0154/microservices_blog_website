// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black text-white px-6 py-10 mt-12 ">
//       <div className="max-w-6xl mx-auto border-t pt-6 border-gray-700">
      
//         <div className="flex flex-col md:flex-row justify-between gap-10">
          
//           <div>
//             <h2 className="text-2xl font-semibold mb-6">Eclypse</h2>
//             <nav className="text-sm space-y-1">
//               <p>Home</p>
//               <p>About</p>
//               <p>Buy</p>
//               <p>Our Customers</p>
//               <p>Contacts</p>
//             </nav>
//           </div>

          
//           <div className="text-sm">
//             <h3 className="mb-2 font-medium">CONTACT</h3>
//             <p className="mb-1">+91 123-456-7890</p>
//             <p>eclypse@gmail.com</p>
//           </div>
//         </div>

        
//         <div className="mt-10 border-t border-gray-700 pt-6 text-xs text-gray-400 flex justify-between items-center">
//           <p>© Eclypse 2025</p>
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
//             aria-label="Scroll to top"
//           >
//             ↑
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Tagline */}
        <div className="flex items-center gap-2">
          <FaLeaf className="text-lime-300 text-2xl" />
          <span className="text-xl font-semibold">Mind Garden</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/explore" className="hover:text-lime-300 transition">Explore</Link>
          <Link to="/about" className="hover:text-lime-300 transition">About</Link>
          <Link to="/contact" className="hover:text-lime-300 transition">Contact</Link>
          <Link to="/privacy" className="hover:text-lime-300 transition">Privacy</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400">
            <FaTwitter />
          </a>
          <a href="mailto:hello@mindgarden.com" className="hover:text-lime-400">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300 mt-6">
        © {new Date().getFullYear()} Mind Garden. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
