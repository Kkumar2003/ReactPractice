import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-yellow-300"
                  : "hover:underline"
              } 
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
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
