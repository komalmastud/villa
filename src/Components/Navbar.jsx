import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="navbar">
        <button className="nav-icon" onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
        </button>

        <ul className={isMenuOpen ? "open" : ""}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "pink" : "link")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "pink" : "link")}
              to="/luxury-getaways"
            >
              Luxury Getaways
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "pink" : "link")}
              to="/list-property"
            >
              List Your Property
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "pink" : "link")}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
