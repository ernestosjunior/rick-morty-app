import { Navigate } from "react-router-dom";
import { useRoot } from "../../store";

export const ProtectedRoutes = ({ children }) => {
  const { token } = useRoot();

  if (!token) return <Navigate to="/signin" replace />;

  return children;
};
