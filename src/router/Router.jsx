import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Schedules from "../pages/Schedules/Schedules";
import Membership from "../pages/Membership/Membership";
import Pricing from "../pages/Pricing/Pricing";
import Offers from "../pages/Offers/Offers";
import Courses from "../pages/Courses/Courses";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/schedules",
        element: <Schedules />,
      },

      {
        path: "/membership",
        element: <Membership />,
      },

      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
]);
