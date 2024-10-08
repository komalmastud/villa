import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="navbar">
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
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/luxury-getaways"
                onClick={() => setIsMenuOpen(false)}
              >
                Luxury Getaways
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/list-property"
                onClick={() => setIsMenuOpen(false)}
              >
                List Your Property
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
