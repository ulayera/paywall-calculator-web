import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../services/auth-provider.service";

export default function Auth({ type }: any) {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [error, setError] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  
  const from = location.state?.from?.pathname || "/";
  
  const handleEmail = (event: any) => setEmail(event?.target?.value);
  const handlePass = (event: any) => setPass(event?.target?.value);
  const handleSubmit = () => {
    if (email && pass) {
      auth.signin(email, pass, () => {
        navigate(from);
      });
    } else {
      setError("Email and password are required");
    }
  };

  return (
    <div className="col-sm-12 col-md-10 col-lg-8">
      <div className="card bg-body-secondary">
        <div className="card-body">
          <h1 className="text-center">
            {type === "login" ? "Sign in" : "Sign up"}
          </h1>
          <div className="container text-center">
            <form>
              {/* email */}
              <div className="row p-3 justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control border-secondary-subtle"
                    id="email"
                    onChange={handleEmail}
                  />
                </div>
              </div>

              {/* password */}
              <div className="row p-3 justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="pass" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control border-secondary-subtle"
                    id="pass"
                    onChange={handlePass}
                  />
                </div>
              </div>

              {/* error */}
              {error && (
                <div className="row p-3 justify-content-center">
                  <div className="col-md-6">
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  </div>
                </div>
              )}
              <div className="row p-3 justify-content-center">
                <div className="col-md-6">
                  {(type === "login" && (
                    <span>
                      First time here? <a href={"/register"}>Sign up</a>
                    </span>
                  )) || (
                    <span>
                      Already registered? <a href={"/login"}>Sign in</a>
                    </span>
                  )}
                </div>
              </div>
              {/* submit */}
              <div className="row p-3 justify-content-center">
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
