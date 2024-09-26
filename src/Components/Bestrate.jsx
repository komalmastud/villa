import { Link } from "react-router-dom";
import "./Bestrate.css";

const Rate = () => {
  return (
    <>
      <div className="resortname-container">
        <h4>Rate Our Services</h4>
      </div>
      <ul className="resortname-link">
        <li>
          <Link to="/" className="resortname">
            All
          </Link>
        </li>
        <li>
          <Link to="/rate/1-star" className="resortname">
            Lonavala
          </Link>
        </li>
        <li>
          <Link to="/rate/2-stars" className="resortname">
            Alibaug
          </Link>
        </li>
        <li>
          <Link to="/rate/3-stars" className="resortname">
            Goa
          </Link>
        </li>
        <li>
          <Link to="/rate/4-stars" className="resortname">
            Shimla
          </Link>
        </li>
        <li>
          <Link to="/rate/5-stars" className="resortname">
            Manali
          </Link>
        </li>
        <li>
          <Link to="/rate-more" className="resortname">
            Coorg
          </Link>
        </li>
        <li>
          <Link to="/rate-more" className="resortname">
            Explore more
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Rate;
