import { Outlet, NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Navigator = () => {
  const auth = useAuth();
  return (
    <nav>
      <div className="navbar bg-body-tertiary">
        <div
          className="container-fluid justify-content-start"
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            "background-color": "#28609017",
          }}
        >
          <div className="link-container">
            <NavLink to="/" className="btn btn-outline-success me-2">
              Home
            </NavLink>
          </div>
          <div className="link-container">
            <NavLink to="/about" className="btn btn-outline-secondary me-2">
              Acerca de
            </NavLink>
          </div>
          <div className="link-container">
            <NavLink to="/contact" className="btn btn-outline-secondary me-2">
              Contacto
            </NavLink>
          </div>
          <div className="link-container">
            <NavLink
              to="/profile/UsuarioDePrueba"
              className="btn btn-outline-secondary me-2"
            >
              Perfil
            </NavLink>
          </div>

          <div className="link-container">
            <NavLink
              to="categories"
              className="btn btn-outline-secondary me-2"
            >
              Categories
            </NavLink>
          </div>

          {!auth.isLogged() && (
            <>
              <div className="link-container">
                <NavLink to="/login" className="btn btn-outline-secondary me-2">
                  Login
                </NavLink>
              </div>
              <div className="link-container">
                <NavLink
                  to="/register"
                  className="btn btn-outline-secondary me-2"
                >
                  Register
                </NavLink>
              </div>
            </>
          )}

          {auth.isLogged() && (
            <>
              <div className="link-container">
                <NavLink
                  to="/dashboard"
                  className="btn btn-outline-secondary me-2"
                >
                  Dashboard
                </NavLink>
              </div>
              <div className="link-container">
                <NavLink
                  to="/payments"
                  className="btn btn-outline-secondary me-2"
                >
                  Payments
                </NavLink>
              </div>
              <div className="link-container">
                <button onClick={auth.logout}>Logout</button>
              </div>
            </>
          )}
        </div>
        <hr></hr>
      </div>
      <script src="./js/app.js" wfd-invisible="true"></script>
      <Outlet />
    </nav>
  );
};

export default Navigator;
