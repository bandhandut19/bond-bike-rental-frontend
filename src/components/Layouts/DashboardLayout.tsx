import { Outlet } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const DashboardLayout = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`${
        theme ? "dark" : ""
      }   dark:bg-gradient-to-bl dark:from-slate-400 dark:bg-slate-600`}
    >
      <div
        className={`${
          theme ? "dark" : ""
        } min-h-screen dark:bg-gradient-to-bl dark:from-slate-400 dark:bg-slate-600`}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
