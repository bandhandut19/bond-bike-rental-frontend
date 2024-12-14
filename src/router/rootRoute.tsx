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
import NotFound from "@/components/Error/NotFound";
import SingleBikePage from "../components/SingleBikePage/SingleBikePage";
import BookingProcess from "../components/BookingProcess/BookingProcess";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

const rootRoute = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <NotFound></NotFound>,
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
        path: "/allbikes/:id",
        element: <SingleBikePage></SingleBikePage>,
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <BookingProcess></BookingProcess>,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default rootRoute;
