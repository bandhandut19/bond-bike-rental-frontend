import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/Layouts/RootLayout";
import Home from "@/components/Home/Home";
import AllBikes from "../components/AllBikes/AllBikes";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "@/components/PrivateRoutes/PrivateRoute";

const rootRoute = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allbikes",
        element: <AllBikes></AllBikes>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
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
export default rootRoute;
