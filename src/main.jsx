import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./components/layouts/RootLayout";
// import { path } from "framer-motion/client";
import App from "./App";
import { AddToCart } from "./components/products/AddToCart";
import D2Percents from "./discount/D2Percent";
import D4Percents from "./discount/D4Percent";
import D5Percents from "./discount/D5Percent";
import D10Percents from "./discount/D10Percent";
import D15Percents from "./discount/D15Percent";
import D20Percents from "./discount/D20Percent";
import D35Percents from "./discount/D35Percent";
import D40Percents from "./discount/D40Percent";
import D50Percents from "./discount/D50Percent";
// import D35Percents from "./discount/D35Percent";
// import D40Percents from "./discount/D40Percent";
// import D50Percents from "./discount/D50Percent";
import Login from "../src/auth/Login";
import Register from "./auth/Register";
import { About } from "./pages/aboutPage/AboutPage";
import { Service } from "./pages/aboutPage/ServicePage";
import ProductDetailCard from "./components/products/ProductDetailCard";
import Promotion from "./components/products/Promotion";
import Payment from "./components/products/Payment";
// import { fetchNewProduct } from "./services/product/productAction";
import GetNewProdcut from "./components/products/NewProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/Promotion/",
        element: <Promotion />,
      },
      {
        path: "/Promotion/:slug",
        element: <Promotion/>,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Service",
        element: <Service />,
      },
      {
        path: "/AddToCart",
        element: <AddToCart />,
      },
      {
        path: "/products/:slug",
        element: <ProductDetailCard />,
      },
      {
        path: "/NewProduct",
        element:<GetNewProdcut/>,
      },
      {
        path:"/D2percents",
        element:<D2Percents/>
      },
      {
        path:"/D4percents",
        element:<D4Percents/>
      },
      {
        path:"/D5percents",
        element:<D5Percents/>
      },
      {
        path:"/D10percents",
        element:<D10Percents/>
      },
      {
        path:"/D15percents",
        element:<D15Percents/>
      },
      {
        path:"/D20percents",
        element:<D20Percents/>
      },
      {
        path:"/D35percents",
        element:<D35Percents/>
      },
      {
        path:"/D40percents",
        element:<D40Percents/>
      },
      {
        path:"/D50percents",
        element:<D50Percents/>
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/products/:slug",
    element: <ProductDetailCard />,
  },
  {
    path: "/AddToCart",
    element: <AddToCart />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
