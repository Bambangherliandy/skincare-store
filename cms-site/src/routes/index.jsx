import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../pages/baseLayout";
import AuthProduct from "../pages/AuthProduct";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/editProduct";
import AddUser from "../pages/addUser";
import AuthCategory from "../pages/authCategory";
import Login from "../pages/login";

const authLoader = () => {
  const token = localStorage.getItem("access_token");
  if (!token) throw redirect("/login");
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
      { path: "products/:id", element: <EditProduct /> },
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
]);
