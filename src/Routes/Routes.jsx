import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../news.json"),
      },
      {
        path: "/about",
        element: <div>About page</div>,
      },
      {
        path: "/career",
        element: <div>Career Page</div>,
      },
      {
        path: "/news_details/:userID",
        loader: () => fetch("../news.json"),
        element: (
          <PrivateRoutes>
            <NewsDetails></NewsDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
