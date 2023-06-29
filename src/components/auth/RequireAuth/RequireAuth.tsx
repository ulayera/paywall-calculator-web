import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../services/auth-provider.service";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();
  
  if (!auth.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}