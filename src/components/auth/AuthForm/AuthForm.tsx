import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../services/auth-context.service";

type AuthProps = {
  formType: "login" | "register";
};

export default function Auth({ formType }: AuthProps): JSX.Element {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  
  const from = location.state?.from?.pathname || "/";
  
  const handleEmail = (event: React.FormEvent<HTMLInputElement>) => setEmail(event?.currentTarget?.value);
  const handlePass = (event: React.FormEvent<HTMLInputElement>) => setPass(event?.currentTarget?.value);
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
            {formType === "login" ? "Sign in" : "Sign up"}
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
                  {(formType === "login" && (
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
