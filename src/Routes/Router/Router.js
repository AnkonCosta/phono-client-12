import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import CategoryPhones from "../../Pages/CategoryPhones/CategoryPhones";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";

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
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'/dashboard',
        element:<MyOrders></MyOrders>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
