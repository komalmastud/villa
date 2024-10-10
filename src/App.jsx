import "./App.css";
import Navbar from "./Components/Navbar";
import Mainfile from "./Mainfile";
import "./index.css";
import Swipper from "./Components/Swipper";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Swipper />
          <Mainfile />
        </>
      ),
    },
    {
      path: "/login",
      element: <></>,
    },
    {
      path: "/aboutus",
      element: <></>,
    },
    {
      path: "/user/:username",
      element: <></>,
    },
    {
      path: "/swiper",
      element: <></>,
    },
    {
      path: "*",
      element: (
        <>
          <h1>Page Not Found</h1>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
