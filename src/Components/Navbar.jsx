import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="nav-title">
        Webside
      </Link>
      <div
        className="nav-menu"
        onClick={() => {
          setOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contactUs">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
