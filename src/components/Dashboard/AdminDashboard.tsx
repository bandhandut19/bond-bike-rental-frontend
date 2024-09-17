import { useGetUserDetailsQuery } from "@/redux/user/userApi";
const AdminDashboard = () => {
  const { data } = useGetUserDetailsQuery({});
  const userInfo = data?.data;
  return (
    <div className="bg-[#D7DFA3]">
      <h1 className="text-center text-xl lg:text-3xl py-4 font-bold text-[#1A4862]">
        Admin Dashboard
      </h1>
    </div>
  );
};

export default AdminDashboard;
