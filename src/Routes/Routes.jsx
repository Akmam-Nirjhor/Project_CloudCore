import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/Home/Products/ProductDetails";
import Test from "../pages/Home/Home/Test";
import About from "../pages/About/About";
import AddToCart from "../pages/AddToCart/AddToCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productDetails/:productID",
        loader: async ({ params }) => {
          const response = await fetch(
            "https://admin.refabry.com/api/all/product/get"
          );
          const data = await response.json();
          const foundProduct = data.data.data.find(
            (p) => p.id === parseInt(params.productID)
          );
          return foundProduct;
        },
        element: <ProductDetails />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/addToCart",
        element: <AddToCart></AddToCart>,
      },
    ],
  },
]);

export default router;
