import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/Layouts/RootLayout";
import Home from "@/components/Home/Home";
import AllBikes from "../components/AllBikes/AllBikes";

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
    ],
  },
]);
export default rootRoute;
