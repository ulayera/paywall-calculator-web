import { Outlet, Route, Routes } from "react-router-dom";
import Auth from "../auth/AuthForm/AuthForm";
import { AuthProvider } from "../auth/AuthProvider/AuthProvider";
import Header from "../auth/Header/Header";
import RequireAuth from "../auth/RequireAuth/RequireAuth";
import NewOperationForm from "../features/NewOperationForm/NewOperationForm";
import UserRecords from "../features/UserRecords/UserRecords";
import Home from "../auth/Home/Home";

export default function Root() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth formType={"login"} />} />
          <Route path="/register" element={<Auth formType={"register"} />} />
          <Route
            path="/arithmetic-operations"
            element={
              <RequireAuth>
                <NewOperationForm />
              </RequireAuth>
            }
          />
          <Route
            path="/user-records"
            element={
              <RequireAuth>
                <UserRecords />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        <Header />
        <div className="col">
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
