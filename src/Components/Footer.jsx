import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Top Location</h3>
          <Link to="/lonvala">Lonavala</Link>
          <Link to="/goa">Goa</Link>
          <Link to="/alibaug">Alibaug</Link>
          <Link to="/karjat">Karjat</Link>
          <Link to="/igatpuri">Igatpuri</Link>
          <Link to="/mahabaleshwar">Mahabaleshwar</Link>
          <Link to="/mumbai">Mumbai</Link>
          <Link to="/kasauli">Kasauli</Link>
          <Link to="/mussorie">Mussorie</Link>
          <Link to="/ooty">Ooty</Link>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Top Collection</h3>
          <Link to="/luxury-villas">Luxury Villas</Link>
          <Link to="/trending-this-season">Trending This Season</Link>
          <Link to="/festive-favorite-villas">Festive Favorite Villas</Link>
          <Link to="/heated-pool-collection">Heated-Pool Collection</Link>
          <Link to="/pet-friendly villas">Pet-Friendly Villas</Link>
          <Link to="/impeccable">Impeccable View Villas</Link>
          <Link to="/festive-favorite-villas">Corporate Offsite Villas</Link>
          <Link to="/heated-pool-collection">Kid-Friendly Villas</Link>
          <Link to="/pet-friendly villas">Getway Collection</Link>
          <Link to="/impeccable">Handpicked Villas</Link>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>About</h3>
          <Link to="/Our Story">Our Story</Link>
          <Link to="/partner-with-us">Partner with Us</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/corporate-offsites">Corporate Offsites</Link>
          <Link to="/events-experience">Events & Experiences</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="gift-cards">Gift Card</Link>
          <Link to="blog">Blog</Link>
          <Link to="careers">Careers</Link>
          <Link to="Covide-policy">Covide Policy</Link>
        </div>

        {/* Column 4 with only 2 names */}
        <div className="footer-column">
          <h3>Support</h3>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/cancellation-refund-policy">
            Cancellation Refund Policy
          </Link>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-second-name">
        <h2>Popular Destinations to Rent a Holidy Home in India</h2>
      </div>

      <div className="footer-container">
        {/* Repeat the same structure as above if needed */}
        <div className="footer-column">
          <h3>Villas +</h3>
          <Link to="/villa">Villas in goa</Link>
          <Link to="/villa-in-lonavala">Villa in Lonavala</Link>
          <Link to="/villas-in-alibaug">Villas in Alibaug</Link>
          <Link to="/villa-in-igatpuri">Villa in Igatpuri</Link>
          <Link to="/villa-in-mahabaleshwar">Villa in Mahabaleshwar</Link>
          <Link to="/villa-in-mumbai">Villa in Mumbai</Link>
          <Link to="/villa-in-banglore">Villas in Banglore</Link>
          <Link to="villa-in-udaipur">Villa in Udaipur</Link>
          <Link to="villa-in-nashik">Villa in nashik</Link>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Bungalows+</h3>
          <Link to="/new-arrivals">Bunglows in Kolkata</Link>
          <div className="mid-line"></div>
          <h3>Cottages +</h3>
          <Link to="/cottages-chandigarh">Cottages in Chandigarh</Link>
          <Link to="/cottages-naldehra">Cottages in Naldehra</Link>
          <Link to="/cottages-arambol">Cottages in Arambol</Link>
          <div className="mid-line"></div>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Homestays</h3>
          <Link to="/homestays-in-kasauli">Homestays in Kasauli</Link>
          <Link to="/homestays-in-mussorie">Homestays in Mussorie</Link>
          <Link to="/homestays-in-oaty">Homestays in Ooty</Link>
          <Link to="/homestays-in-manali">Homestays in Manali</Link>
          <Link to="/homestays-in-naintal">Homestays in Nainital</Link>
          <Link to="/homestays-in-wayand">Homestays in Wayand</Link>
          <Link to="/homestays-in-kodaikanal">Homestays in Kodaikanal</Link>
          <Link to="homestays-in-jim-corbett">Homestays in Jim Corbett</Link>
          <Link to="homestays-in-pondicherry">Homestays in Pondicherry</Link>
          <Link to="homestays-in-coorg">Homestays in Coorg</Link>
        </div>

        {/* Column 4 with only 2 names */}
        <div className="footer-column">
          <h3>Places To Visit+</h3>

          <Link to="places-to-visit-in-alibaug">
            Places To Visit in Alibaug
          </Link>
          <Link to="places-to-visit-in-mussorie">
            Places To Visit in Mussorie
          </Link>
          <Link to="places-to-visit-in-coorg">Places To Visit in Coorg</Link>
          <Link to="places-to-visit-in-kasauli">
            Places To Visit in Kasauli
          </Link>
          <Link to="places-to-visit-in-karjat">Places To Visit in Karjat</Link>
          <Link to="places-to-visit-in-goa">Places To Visit in Goa</Link>
        </div>
      </div>

      <div className="footer-line"></div>

      {/* Social Media Icons */}
      <div className="social-media">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <Link to="/facebook">
            <FaFacebook />
          </Link>
          <Link to="/instagram">
            <FaInstagram />
          </Link>
          <Link to="/youtube">
            <FaYoutube />
          </Link>
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
