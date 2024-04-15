import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Estate from "../pages/Estate/Estate";
import PrivetRoutes from "./PrivetRoutes";
import UserProfile from "../pages/UserProfile/UserProfile";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import UserUpdate from "../pages/UserUpdate/UserUpdate";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/estate.json"),
      },
      {
        path: "/estate/:id",
        element: (
          <PrivetRoutes>
            <Estate></Estate>
          </PrivetRoutes>
        ),
        loader: () => fetch("/estate.json"),
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/update_profile",
        element:<PrivetRoutes>
          <UserUpdate></UserUpdate>
        </PrivetRoutes>
      },
      {
        path:"/user_profile",
        element:<PrivetRoutes>
          <UserProfile></UserProfile>
        </PrivetRoutes>
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
