import { Link } from "react-router-dom";
import "./Bestrate.css";

const Rate = () => {
  return (
    <>
      <div className="resortname-container">
        <h3>Rate Our Services</h3>
      </div>
      <ul className="resortname-link">
        <li>
          <Link to="/" className="resortname">
            All
          </Link>
        </li>
        <li>
          <Link to="/rate/1-star" className="resortname">
            1 Star
          </Link>
        </li>
        <li>
          <Link to="/rate/2-stars" className="resortname">
            2 Stars
          </Link>
        </li>
        <li>
          <Link to="/rate/3-stars" className="resortname">
            3 Stars
          </Link>
        </li>
        <li>
          <Link to="/rate/4-stars" className="resortname">
            4 Stars
          </Link>
        </li>
        <li>
          <Link to="/rate/5-stars" className="resortname">
            5 Stars
          </Link>
        </li>
        <li>
          <Link to="/rate-more" className="resortname">
            Rate More
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Rate;
