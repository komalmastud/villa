import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3> Links</h3>
        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-of-service">Terms of Service</Link>
          </li>
        </ul>
        <div className="social-media">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <Link to="/facebook">Facebook</Link>
            </li>
            <li>
              <Link to="/instagram">Instagram</Link>
            </li>
            <li>
              <Link to="/twitter">Twitter</Link>
            </li>
            <li>
              <Link to="/github">GitHub</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
