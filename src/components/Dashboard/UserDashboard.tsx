import { useGetUserDetailsQuery } from "@/redux/user/userApi";
import { useState } from "react";
import Welcome from "../ui/Welcome";
import Profile from "../ui/Profile";
import MyRentals from "../ui/MyRentals";
import { useNavigate } from "react-router-dom";
const UserDashboard = () => {
  const { data } = useGetUserDetailsQuery({});
  const userInfo = data?.data;
  const navigate = useNavigate();
  const [option, setOption] = useState("");
  const [hideSidebar, setHideSidebar] = useState(true);
  const handleOptionWelcome = () => {
    setOption("welcome");
  };
  const handleOptionProfile = () => {
    setOption("profile");
  };
  const handleOptionMyRentals = () => {
    setOption("myRentals");
  };
  const handleSidebar = () => {
    setHideSidebar(!hideSidebar);
  };
  return (
    <div>
      <div>
        <div className="bg-[#D7DFA3]">
          {hideSidebar ? (
            <h1 className="text-center lg:ml-56  ml-20 text-lg lg:text-3xl py-4 font-extrabold text-[#1A4862]">
              User Dashboard
            </h1>
          ) : (
            <h1 className="text-center text-lg lg:text-3xl py-4 font-extrabold text-[#1A4862]">
              User Dashboard
            </h1>
          )}
          <div className="flex gap-2">
            <button
              onClick={handleSidebar}
              className="bg-[#1A4862] text-[#D7DFA3] lg:text-lg text-sm py-2 px-4 hover:text-[#1A4862] hover:bg-white hover:font-extrabold font-semibold"
            >
              {hideSidebar ? "Hide Sidebar" : "Show Sidebar"}
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-[#1A4862] text-[#D7DFA3] lg:text-lg text-sm py-2 px-4 hover:text-[#1A4862] hover:bg-white hover:font-extrabold font-semibold"
            >
              Go back to home
            </button>
          </div>
        </div>
        <div className=" text-[#1A4862] min-h-screen flex overflow-auto">
          {hideSidebar ? (
            <div className="bg-[#D7DFA3] lg:w-1/5">
              <ul className="flex flex-col gap-5 pt-5">
                <li>
                  <button
                    className="lg:text-xl text-sm py-2 w-full border-r-0 border-l-0 hover:text-[#1A4862] hover:bg-white hover:border-[#1A4862] text-center bg-[#1A4862] text-[#D7DFA3] font-bold cursor-pointer border-2"
                    onClick={handleOptionWelcome}
                  >
                    <span> Welcome Page</span>
                  </button>
                </li>
                <li>
                  <button
                    className="lg:text-xl text-sm w-full py-2 border-r-0 border-l-0 hover:text-[#1A4862] hover:bg-white hover:border-[#1A4862] text-center bg-[#1A4862] text-[#D7DFA3] font-bold cursor-pointer border-2"
                    onClick={handleOptionProfile}
                  >
                    <span> View Profile</span>
                  </button>
                </li>
                <li>
                  <button
                    className="lg:text-xl text-sm w-full py-2 border-r-0 border-l-0 hover:text-[#1A4862] hover:bg-white hover:border-[#1A4862] text-center bg-[#1A4862] text-[#D7DFA3] font-bold cursor-pointer border-2"
                    onClick={handleOptionMyRentals}
                  >
                    <span> My Rentals </span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="bg-[#1A4862] w-full text-white p-2 lg:p-0">
            {option === "profile" ? (
              <Profile></Profile>
            ) : option === "welcome" ? (
              <Welcome name={userInfo?.name}></Welcome>
            ) : option === "myRentals" ? (
              <MyRentals></MyRentals>
            ) : (
              <Welcome name={userInfo?.name}></Welcome>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
