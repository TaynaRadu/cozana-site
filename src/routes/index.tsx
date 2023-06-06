import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Despre } from "../pages/despre";
import { Cakes } from "../pages/cakes";

export const SITE_ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/despre",
    element: <Despre />,
  },
  {
    path: "/cakes",
    element: <Cakes />,
  },
]);
