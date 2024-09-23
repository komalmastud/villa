import "./App.css";
import AboutUs from "./Components/AboutUs";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Swipper from "./Components/Swipper";
import User from "./Components/User";
import Home from "./Home";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <>
          <Navbar />
          <AboutUs />
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
    {
      path: "/swiper",
      element: (
        <>
          <Navbar />
          <Swipper />
        </>
      ),
    },

    {
      path: "*",
      element: (
        <>
          <Navbar />
          <h1>Page Not Found</h1>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
