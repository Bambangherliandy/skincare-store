import { createBrowserRouter, redirect } from "react-router";

import Home from "../pages/home";
import BaseLayout from "../pages/baseLayout";
import Detail from "../pages/detail";
import AuthProduct from "../pages/AuthProduct";
import AddProduct from "../pages/AddProduct";
import Product from "../pages/product";
import Login from "../pages/login";
import UpdateProduct from "../pages/editProduct";
import AddUser from "../pages/addUser";
import AuthCategory from "../pages/authCategory";

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
        element: <UpdateProduct />,
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
