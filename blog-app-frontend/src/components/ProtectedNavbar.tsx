
import { Link, useNavigate } from "react-router-dom";
import { FaSeedling, FaCamera, FaFeatherAlt, FaInstagram, FaTwitter } from "react-icons/fa";

const ProtectedNavbar = () => {
    const navigate = useNavigate();
  return (

<nav className="bg-green-700 text-white p-6 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
              <span role="img" aria-label="logo">🌱</span>
              <span>Mind Garden</span>
            </Link>
            <Link to="/explore" className="hover:underline text-white">Explore</Link>
            <Link to="/about" className="hover:underline text-white">About</Link>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300"><FaInstagram size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaTwitter size={20} /></a>
            <Link to="/dashboard" className="hover:underline text-white">Dashboard</Link>
            <button onClick={() => { localStorage.removeItem("token"); localStorage.removeItem("userid"); navigate("/login"); }} className="hover:underline text-white">Logout</button>
          </div>
        </div>
      </nav>

  )
}


export default ProtectedNavbar;
