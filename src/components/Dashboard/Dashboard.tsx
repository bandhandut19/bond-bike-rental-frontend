import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  const userEmail = useAppSelector((state: RootState) => state.user.email);
  const userRole = useAppSelector((state: RootState) => state.user.role);

  return (
    <div>
      {userRole && userRole === "user" ? (
        <UserDashboard></UserDashboard>
      ) : userRole && userRole === "admin" ? (
        <AdminDashboard></AdminDashboard>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
