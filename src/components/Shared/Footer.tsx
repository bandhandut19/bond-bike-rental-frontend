import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-5 flex flex-col bg-[#1A4862] text-[#D7DFA3] lg:p-5 px-2 py-10 items-center justify-center font-primary-one  min-h-64">
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-48 gap-10 lg:p-2 items-center justify-center">
        <nav className="flex flex-col mt-14 items-center justify-center text-center">
          <h1 className="lg:text-2xl text-xl text-center font-bold font-name mb-5">
            Bond Bike Rentals
          </h1>
          <div className="flex  md:flex-col flex-col gap-1 items-left justify-center cursor-pointer">
            <span className="">01797537300</span>
            <span className="">bondon21081@gmail.com</span>
          </div>
        </nav>
        <nav className="flex flex-col mt-10 text-center lg:ml-10 ">
          <h6 className="footer-title text-center font-extrabold opacity-100 ">
            Quick Navigation
          </h6>
          <Link to={"/allbikes"} className="link link-hover text-white">
            All Bikes
          </Link>
          <Link to={"/about"} className="link link-hover text-white">
            About Us
          </Link>
          <Link to={"/contact"} className="link link-hover text-white">
            Contact Us
          </Link>
        </nav>
        <nav className="flex flex-col mt-10 text-center lg:ml-10 ">
          <h6 className="footer-title opacity-100 text-center font-extrabold ">
            Company Policies
          </h6>
          <Link to={"/allbikes"} className="link link-hover text-white">
            Privacy Policy
          </Link>
          <Link to={"/about"} className="link link-hover text-white">
            Terms of Service
          </Link>
        </nav>
        <nav className="lg:ml-10 ml-5 ">
          <h6 className="footer-title text-center opacity-100">Social Links</h6>
          <div className="grid grid-flow-col gap-4  ml-2">
            {/* Linkedin */}
            <Link
              to={"https://bd.linkedin.com/in/bondon-datta-56b375161"}
              target="_blank"
            >
              <div className="w-[25px]">
                <img src="/linkedin.png" alt="" />
              </div>
            </Link>
            {/* Instagram */}
            <Link
              to={"https://www.instagram.com/bandhan_datta/"}
              target="_blank"
            >
              <div className="w-[25px]">
                <img src="/instagram.png" alt="" />
              </div>
            </Link>
          </div>
        </nav>
      </div>
      <h1>
        <p className="">
          &copy;{" "}
          <span className="" id="year">
            2024
          </span>{" "}
          iBondeV(Bondon). All rights reserved.
        </p>
      </h1>
      {/* <div className="text-center">
        <h1 className="lg:text-7xl text-5xl font-bold font-name mb-10">
          Alyssa Runge
        </h1>
      </div> */}
    </footer>
  );
};

export default Footer;
