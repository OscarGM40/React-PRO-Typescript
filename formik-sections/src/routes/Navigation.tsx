import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import FormikComponents from "../03-forms/pages/FormikComponents";
import FormikYupPage from "../03-forms/pages/FormikYupPage";
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
                to="/formik-yup"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                Formik Yup Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                Formik Components
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
            <Route path="/formik-yup" element={<FormikYupPage />}></Route>
            <Route path="/formik-components" element={<FormikComponents />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </Routes>
                </div>
        </div>
    </Router>
  );
};
