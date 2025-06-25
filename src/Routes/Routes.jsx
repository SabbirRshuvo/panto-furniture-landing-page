import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Furniture from "../Pages/Furniture";
import Shop from "../Pages/Shop";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>error....</p>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/furniture", element: <Furniture /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default routes;
