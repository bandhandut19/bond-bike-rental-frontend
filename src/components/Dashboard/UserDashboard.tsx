import { useGetUserDeatilsQuery } from "@/redux/user/userApi";

const UserDashboard = () => {
  const user = useGetUserDeatilsQuery({});
  console.log(user);
  return <div>This is User Dashboard</div>;
};

export default UserDashboard;
