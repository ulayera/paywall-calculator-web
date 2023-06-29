import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/auth-provider.service";

export default function Header() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: "Home",
      path: "/",
      requireAuth: false,
    },
    {
      label: "Arithmetic Operations",
      path: "/arithmetic-operations",
      requireAuth: true,
    },
    {
      label: "User Records",
      path: "/user-records",
      requireAuth: true,
    },
  ];

  return (
    <header className="p-1 mb-3 border-bottom">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {/* navigation */}
          <div className="align me-auto mb-2 mb-lg-0">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand px-2 ">
                  <i className="bi bi-calculator fs-2"></i>
                </Link>
                <div className="navbar-nav">
                  {menuItems.map((item) => {
                    return (
                      <Link
                        to={item.path}
                        className={`
                          nav-link px-2 
                          ${location.pathname === item.path ? "active" : ""}
                          ${item.requireAuth && !auth.token ? "disabled" : ""}
                          `}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
          {/* session */}
          <a
            className="nav-link dropdown-toggle link-secondary"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-person-circle fs-2"></i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item link-secondary"
                href="#"
                onClick={() => {
                  auth.signout(() => navigate("/"));
                }}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
