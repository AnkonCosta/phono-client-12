import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import CategoryPhones from "../../Pages/CategoryPhones/CategoryPhones";
import PrivateRoute from '../PrivateRoute'
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:brand",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/phones/${params.brand}`);
        },
        element: <CategoryPhones></CategoryPhones>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        element:<MyOrders></MyOrders>
      },
      {
        path:'/dashboard/all-users',
        element:<AllUsers></AllUsers>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
