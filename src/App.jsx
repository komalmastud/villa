import "./App.css";
import Navbar from "./Components/Navbar";
import Mainfile from "./Mainfile";
import "./index.css";
import Swipper from "./Components/Swipper";
import Alibaug from "./Components/Alibaug";
import BookingPayment from "./Components/Bookingpayment";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // Define all routes with createBrowserRouter
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
      path: "/swiper",
      element: <></>, // Implement your Swiper component
    },

    {
      path: "/bookingpayment",
      element: <BookingPayment />,
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
