// Manpreet Kaur (8983013)
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    // Main navigation bar container
    <nav className="navbar">
      {/* Website Logo */}
      <Link to="/" className="logo-link"><h2 className="logo">Wonderlust Guide</h2></Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        {/* Home Link - 'end' ensures it's active only on the root "/" */}
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        {/* Destinations Page Link */}
        <li>
          <NavLink 
            to="/destinations" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Destinations
          </NavLink>
        </li>

        {/* Travel Tips Page Link */}
        <li>
          <NavLink 
            to="/tips" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Travel Tips
          </NavLink>
        </li>

        {/* Contact Page Link */}
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
