import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for custom styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left side: Logo */}
        <div className="navbar-logo">
          <img src="/pets-paws-logo.jpeg" alt="Logo" className="logo" />
        </div>

        {/* Right side: Links */}
        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-list">
            <li><a href="/">Home</a></li>
            <li><a href="/adopt-a-pet">Find a Pet</a></li>
            <li><a href="/list-a-pet">List a Pet</a></li>
            <li><a href="/list-a-pet">Medical Care</a></li>
            <li><a href="/about-us-volunteer">About/Volunteer</a></li>
            <li><a href="#" className="btn-login">Login/Register</a></li>
          </ul>
        </nav>

        {/* Menu Toggle Button for mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
