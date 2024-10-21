import React, { useState } from "react";
import Popup from "./Popup";

const App = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setPopupOpen(true)}>Open Popup</button>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default App;
