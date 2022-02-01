import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

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
                to="/"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                Shopping Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(props) => (props.isActive ? "nav-active" : "")}
              >
                About
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

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<ShoppingPage />}></Route>
          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/users" element={<h1>Users</h1>}></Route>
        </Routes>
      </div>
    </Router>
  );
};
