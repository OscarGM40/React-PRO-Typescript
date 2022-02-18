import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import {
  DynamicForm,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from "../03-forms/pages";

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
                to="/formik-abstraction"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                Formik Abstraction -useField-
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-register"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                Register Using Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/about" element={<h1>About</h1>}></Route>
            <Route path="/formik-basic" element={<FormikBasicPage />}></Route>
            <Route path="/formik-yup" element={<FormikYupPage />}></Route>
            <Route
              path="/formik-components"
              element={<FormikComponents />}
            ></Route>
            <Route
              path="/formik-abstraction"
              element={<FormikAbstraction />}
            ></Route>
            <Route
              path="/formik-register"
              element={<RegisterFormikPage />}
            ></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/dynamic-form" element={<DynamicForm />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};
