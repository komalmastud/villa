import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "pink" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "pink" : "")}
              to="/luxury-getaways"
            >
              Luxury Getaways
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "pink" : "")}
              to="/list-property"
            >
              List Your Property
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "pink" : "")}
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
