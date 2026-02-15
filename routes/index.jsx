import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../public-site/src/pages/home";
import BaseLayout from "../cms-site/src/pages/baseLayout";
import AuthProduct from "../cms-site/src/pages/AuthProduct";
import AddProduct from "../cms-site/src/pages/AddProduct";
import EditProduct from "../cms-site/src/pages/editProduct";
import AddUser from "../cms-site/src/pages/addUser";
import AuthCategory from "../cms-site/src/pages/authCategory";
import Product from "../public-site/src/pages/product";
import Detail from "../public-site/src/pages/detail";
import Login from "../cms-site/src/pages/login";

const authLoader = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    throw redirect("/");
  }
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    loader: authLoader,
    element: <BaseLayout />,
    children: [
      {
        path: "products",
        element: <AuthProduct />,
      },
      {
        path: "products/add",
        element: <AddProduct />,
      },
      {
        path: "products/:id",
        element: <EditProduct />,
      },
      {
        path: "addUser",
        element: <AddUser />,
      },
      {
        path: "categories",
        element: <AuthCategory />,
      },
    ],
  },
  {
    path: "pub",
    element: <Product />,
  },
  {
    path: "pub/:id",
    element: <Detail />,
  },

  {
    path: "login",
    element: <Login />,
  },
]);
