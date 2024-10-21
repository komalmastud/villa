// Navbar.js
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Popup from "./Popup";
import Explore from "./Explore"; // Import Explore component

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleScroll = () => setIsScrolled(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setIsPopupOpen(true);
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setIsExploreOpen(true);
  };

  const handleClosePopup = () => setIsPopupOpen(false);
  const handleCloseExplore = () => setIsExploreOpen(false);

  return (
    <header>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="brand">Brand</div>
        <button
          className="nav-icon"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className={`navmain-content ${isMenuOpen ? "open" : ""}`}>
          <ul className="navbar-menu">
            <li>
              <NavLink
                className="link"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/luxury-getaways"
                onClick={() => setIsMenuOpen(false)}
              >
                Luxury Getaways
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/list-property"
                onClick={() => setIsMenuOpen(false)}
              >
                List Your Property
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="#" onClick={handleContactClick}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="#" onClick={handleExploreClick}>
                Explore
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <Explore isOpen={isExploreOpen} onClose={handleCloseExplore} />
    </header>
  );
}

export default Navbar;
