import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { changeTheme } from "@/redux/theme/themeSlice";
import { removeUser } from "@/redux/user/useSlice";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { toast } from "sonner";
const logo = "/logo_bkr.png";
const Navbar = () => {
  const userEmail = useAppSelector((state: RootState) => state.user.email);
  const [themeMode, setThemeMode] = useState(true);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
    Cookies.remove("authToken");
    window.location.reload(); // removing cookies instanlty after logout
  };
  const handleThemeMode = () => {
    setThemeMode(!themeMode);
    dispatch(changeTheme(themeMode));
    // if (themeMode) {
    //   toast("Dark Theme Mode On");
    // }
    // if (themeMode === false) {
    //   toast("Light Theme Mode On");
    // }
  };
  return (
    <div className={`navbar bg-[#1A4862] dark:bg-slate-600`}>
      <div className="navbar-start">
        <div className="dropdown z-10 ">
          <div tabIndex={0} role="button" className="btn btn-ghost   lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu gap-2 menu-sm text-[#D7DFA3] font-bold bg-[#1A4862] dropdown-content mt-3 w-52 p-2 shadow"
          >
            <li className="">
              <Link to={"/allbikes"} className="rounded-none text-white ">
                All Bikes
              </Link>
            </li>
            <li className="">
              <Link to={"/contact"} className="rounded-none">
                Contact Us
              </Link>
            </li>
            <li className="">
              <Link to={"/about"} className="rounded-none">
                About Us
              </Link>
            </li>
            <li className={userEmail ? "block" : "hidden"}>
              <Link to={"/dashboard"} className="rounded-none ">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="lg:text-xl hover:scale-110 duration-300 md:text-2xl text-sm text-[#D7DFA3]  font-extrabold lg:ml-5"
        >
          <img src={logo} width={70} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex   text-[#D7DFA3] font-bold ">
        <ul className="menu gap-5 menu-horizontal px-1">
          <li className="">
            <NavLink
              to={"/allbikes"}
              className={({ isActive }) =>
                `nav-link hover:bg-[#D7DFA3] hover:scale-110 duration-300 dark:text-black rounded-none text-xl  hover:text-[#1A4862] ${
                  isActive ? "nav-link-active" : ""
                }`
              }
            >
              All Bikes
            </NavLink>
          </li>
          <li className={userEmail ? "block" : "hidden"}>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                `nav-link hover:bg-[#D7DFA3] hover:scale-110 duration-300 dark:text-black rounded-none text-xl  hover:text-[#1A4862] ${
                  isActive ? "nav-link-active" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `nav-link hover:bg-[#D7DFA3] hover:scale-110 duration-300 dark:text-black hover:text-[#1A4862] text-xl rounded-none ${
                  isActive ? "nav-link-active" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `nav-link hover:bg-[#D7DFA3] hover:scale-110 duration-300 dark:text-black hover:text-[#1A4862] text-xl rounded-none  ${
                  isActive ? "nav-link-active" : ""
                }`
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="px-2 text-center lg:px-5 pt-1 hover:scale-125 duration-300">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onChange={handleThemeMode}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 lg:w-10 w-7 fill-current  text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 lg:w-10 w-7 text-[#D7DFA3] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {userEmail ? (
          <Link
            onClick={handleLogout}
            to={"/login"}
            className="lg:mr-5 py-1 px-2 hover:scale-105 duration-300 dark:text-white dark:bg-black lg:py-2 lg:px-4 md:text-xl  lg:text-lg text-sm bg-white text-[#1A4862] font-bold"
          >
            Logout
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="lg:mr-5 py-1 px-2 hover:scale-105 duration-300 lg:py-2 lg:px-4 dark:text-white dark:bg-black  lg:text-lg text-sm bg-white text-[#1A4862] font-bold"
          >
            Login Now !
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
