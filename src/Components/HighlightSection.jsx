import React from "react";

const HighlightsSection = () => {
  return (
    <div className="Highlight-button" id="Highlights">
      <div className="Name">
        <h3>Hamptons Charm - Villa in Alibaug</h3>
        <p>
          Surrounded by greenery and close to the beach, Hamptons Charm is a
          stylishly elegant villa in Alibaug. The furnishing is a superb balance
          of traditional and contemporary comfort...
        </p>
      </div>

      <div className="hampstren-container">
        {[
          "Explore Your Stay",
          "Home Rules and Truth",
          "Booking & Cancellation Policy",
          "FAQ's",
        ].map((label, index) => (
          <button key={index} className="hampstren-button">
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HighlightsSection;
