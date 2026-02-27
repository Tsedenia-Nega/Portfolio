import React, { useState } from "react"; // Added useState
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Install react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {" "}
          {/* Added justify-between */}
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-black italic tracking-tighter bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity flex-shrink-0"
          >
            Tsedenia
          </Link>
          {/* Desktop Links - Kept your specific spacing */}
          <div className="hidden md:flex flex-grow justify-center pl-150">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile Menu Button - ONLY shows on small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 text-3xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu when link is clicked
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium py-2 text-center"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
