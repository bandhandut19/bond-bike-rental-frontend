import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const RootLayout = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`${
        theme ? "dark" : ""
      }   dark:bg-gradient-to-bl dark:from-slate-400 dark:bg-slate-600`}
    >
      <Navbar></Navbar>
      <div
        className={`${
          theme ? "dark" : ""
        } min-h-screen dark:bg-gradient-to-bl dark:from-slate-400 dark:bg-slate-600`}
      >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
