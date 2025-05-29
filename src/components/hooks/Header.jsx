import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <ul className="flex flex-col md:flex-row gap-4">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold text-yellow-300"
              : "hover:underline"
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold text-yellow-300"
              : "hover:underline"
          }
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold text-yellow-300"
              : "hover:underline"
          }
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold text-yellow-300"
              : "hover:underline"
          }
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );

  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center relative">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-1 w-6 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-1 w-6 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-1 w-6 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      <nav className="hidden md:block">
        {navLinks}
      </nav>
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-blue-700 md:hidden z-10 shadow-lg">
          {navLinks}
        </nav>
      )}
    </header>
  );
};

export default Header;
