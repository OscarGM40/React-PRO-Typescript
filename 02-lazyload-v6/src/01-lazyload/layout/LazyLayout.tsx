import { NavLink } from "react-router-dom";
import { Outlet } from './Outlet';

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to="lazy1">Lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy3</NavLink>
        </li>
      </ul>

      <Outlet />
  
    </div>
  );
};

export default LazyLayout;
