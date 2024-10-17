import "./App.css";
import Navbar from "./Components/Navbar";
import Mainfile from "./Mainfile";
import "./index.css";
import Swipper from "./Components/Swipper";
import Alibaug from "./Components/Alibaug";
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
      path: "/alibaug",
      element: <Alibaug />,
    },
    {
      path: "/login",
      element: <></>, // Implement your Login component
    },
    {
      path: "/aboutus",
      element: <></>, // Implement your About Us component
    },
    {
      path: "/user/:username",
      element: <></>, // Implement your User component
    },
    {
      path: "/swiper",
      element: <></>, // Implement your Swiper component
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
