import { createBrowserRouter } from "react-router-dom";
import Cart from "../page/cart";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
]);
