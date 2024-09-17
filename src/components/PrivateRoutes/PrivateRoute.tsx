import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React from "react";
import { Navigate } from "react-router-dom";
interface PrivateRouteProps {
  children: React.ReactNode;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const userEmail = useAppSelector((state: RootState) => state.user.email);

  if (!userEmail) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
