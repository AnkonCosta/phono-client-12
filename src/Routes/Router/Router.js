import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import CategoryPhones from "../../Pages/CategoryPhones/CategoryPhones";
import PrivateRoute from "../PrivateRoute";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddPhones from "../../Pages/Dashboard/AddPhones/AddPhones";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AdminRoute from "../AdminRoute";
import Blog from "../../Pages/Blog/Blog";
import SellerProducts from "../../Pages/Dashboard/SellerProducts/SellerProducts";
import SellerRoute from "../SellerRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:brand",
        loader: ({ params }) => {
          return fetch(`https://assignment-12-server-ten.vercel.app/phones/${params.brand}`);
        },
        element: <PrivateRoute><CategoryPhones></CategoryPhones></PrivateRoute>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add",
        element: (
          <SellerRoute>
            {" "}
            <AddPhones></AddPhones>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/seller-products",
        element: (
          <SellerRoute>
            <SellerProducts></SellerProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`https://assignment-12-server-ten.vercel.app/bookings/${params.id}`),
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
