import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import RegisterPage from "../03-forms/pages/RegisterPage";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                Formik Basic Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes >
            <Route path="/about" element={<h1>About</h1>}></Route>
            <Route path="/formik-basic" element={<FormikBasicPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </Routes>
                </div>
        </div>
    </Router>
  );
};
