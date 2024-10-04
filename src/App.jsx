import Navbar from "./Components/Navbar";
import Swipper from "./Components/Swipper"; // Check if needed
import User from "./Components/User"; // Check if needed
import Mainfile from "./Mainfile"; // Check if needed

import { Routes, Route } from "react-router-dom";
import { Home, ContactUs, Explore, Services } from "./Components/Pages"; // Ensure exports are correct

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>

      <Swipper />
      <User />
      <Mainfile />
    </>
  );
};

export default App;
