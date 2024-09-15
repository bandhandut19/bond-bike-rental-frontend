import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#1A4862] ">
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
              <Link to={"/allbikes"} className="rounded-sm text-white">
                All Bikes
              </Link>
            </li>
            <li className="">
              <Link to={"/contact"} className="rounded-sm ">
                Contact Us
              </Link>
            </li>
            <li className="">
              <Link to={"/about"} className="rounded-sm ">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="lg:text-xl text-sm text-[#D7DFA3]  font-extrabold lg:ml-5"
        >
          Bond Bike Rentals
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-[#D7DFA3] font-bold ">
        <ul className="menu gap-5 menu-horizontal px-1">
          <li className="">
            <NavLink
              to={"/allbikes"}
              className={({ isActive }) =>
                `nav-link hover:bg-[#D7DFA3] rounded-sm text-xl  hover:text-[#1A4862] ${
                  isActive ? "nav-link-active" : ""
                }`
              }
            >
              All Bikes
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `nav-link hover:bg-[#D7DFA3] hover:text-[#1A4862] text-xl rounded-sm ${
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
                `nav-link hover:bg-[#D7DFA3] hover:text-[#1A4862] text-xl rounded-sm  ${
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
        <Link
          to={"/contact"}
          className="lg:mr-5 py-1 px-2 lg:py-2 lg:px-4 rounded-sm lg:text-lg text-sm bg-white text-[#1A4862] font-bold"
        >
          Login Now !
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
