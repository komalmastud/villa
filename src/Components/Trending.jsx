import { Link } from "react-router-dom";
import "./Trending.css"; // Ensure you have a CSS file for styling

const Trending = () => {
  return (
    <>
      <div className="trending-container">
        <h3>Trending Destinations</h3>
      </div>
      <ul className="trending-link">
        <li>
          <Link to="/" className="trending-button">
            All
          </Link>
        </li>
        <li>
          <Link to="/lonavala" className="trending-button">
            Lonavala
          </Link>
        </li>
        <li>
          <Link to="/alibaug" className="trending-button">
            Alibaug
          </Link>
        </li>
        <li>
          <Link to="/goa" className="trending-button">
            Goa
          </Link>
        </li>
        <li>
          <Link to="/shimla" className="trending-button">
            Shimla
          </Link>
        </li>
        <li>
          <Link to="/manali" className="trending-button">
            Manali
          </Link>
        </li>
        <li>
          <Link to="/explore-more" className="trending-button">
            Explore More
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Trending;
