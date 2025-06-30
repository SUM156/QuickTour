import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo or Title */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          QuickTour
        </Link>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Menu Links */}
        <ul className={`flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-blue-800 md:bg-transparent z-10 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden md:flex"}`}>
          <li className="md:mx-3 px-4 py-2 hover:bg-blue-950 md:hover:bg-transparent">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="md:mx-3 px-4 py-2 hover:bg-blue-950 md:hover:bg-transparent">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="md:mx-3 px-4 py-2 hover:bg-blue-950 md:hover:bg-transparent">
            <Link to="/visit" onClick={() => setIsOpen(false)}>Visit</Link>
          </li>
          <li className="md:mx-3 px-4 py-2 hover:bg-blue-950 md:hover:bg-transparent">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
