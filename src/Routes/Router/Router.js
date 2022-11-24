import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryPhones from "../../Pages/CategoryPhones/CategoryPhones";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
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
        path: "/phones/:brand",
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
]);
export default router;
