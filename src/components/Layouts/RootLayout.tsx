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
      }  bg-gradient-to-bl from-[#1A4862] to-[#D7DFA3]`}
    >
      <Navbar></Navbar>
      <div className={`${theme ? "dark" : ""} min-h-screen`}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
