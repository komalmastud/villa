import Navbar from "./Components/Navbar";
import "./index.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import User from "./Components/User";
import Card from "./Components/Card";
import Swipper from "./Components/Swipper";
import Search from "./Components/Search";
import Icons from "./Components/Icons";
import AboutUs from "./Components/AboutUs";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Swipper />
          <Navbar />
          <Home />
          <Search />
          <Icons />
          <Card />
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
