import { NavLink } from "react-router-dom";
import "./navbar.css";

/* en cuanto use NavLink ya no se hará un refresh. */
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
