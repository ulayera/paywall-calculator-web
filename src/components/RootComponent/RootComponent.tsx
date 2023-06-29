import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../../services/auth-provider.service";
import Auth from "../auth/AuthForm/AuthForm";
import { AuthProvider } from "../auth/AuthProvider/AuthProvider";
import NewOperationForm from "../features/NewOperationForm/NewOperationForm";

export default function Root() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <NewOperationForm />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Auth type={"login"} />} />
          <Route path="/register" element={<Auth type={"register"} />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <AuthStatus />
        <Outlet />
      </div>
    </div>
  );
}

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.token) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome user!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
