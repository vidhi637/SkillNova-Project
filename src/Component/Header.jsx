import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // <-- Important for routing

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          SKill<span className="text-yellow-500">Nova</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-500 transition">About Us</Link>
          
          <Link to="/courses" className="hover:text-yellow-500 transition">Courses</Link>
          <Link to="/pay" className="hover:text-yellow-500 transition">Pay Now</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">Contact Us</Link>
          <Link to="/login" className="hover:text-yellow-500 transition">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-yellow-500" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-yellow-500" onClick={toggleMenu}>About Us</Link>
          
          <Link to="/courses" className="block py-2 text-gray-700 hover:text-yellow-500" onClick={toggleMenu}>Courses</Link>
          <Link to="/pay" className="block py-2 text-gray-700 hover:text-yellow-500" onClick={toggleMenu}>Pay Now</Link>
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-yellow-500" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/login" className="block py-2 text-gray-700 hover:text-yellow-500" onClick={toggleMenu}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
