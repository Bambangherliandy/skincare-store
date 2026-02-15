import { createBrowserRouter } from "react-router-dom";
import Detail from "../pages/detail";
import Home from "../pages/home";
import Product from "../pages/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pub",
    element: <Product />,
  },
  {
    path: "pub/:id",
    element: <Detail />,
  },
]);
