import { NavLink, Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import LazyPage1 from "../pages/LazyPage1";
import LazyPage2 from "../pages/LazyPage2";
import LazyPage3 from "../pages/LazyPage3";

export const LazyLayout = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to={`${url}/lazy1`}>Lazy Page 1</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/lazy2`}>Lazy Page 2</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/lazy3`}>Lazy Page 3</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${path}/lazy1`}>
          <LazyPage1 />
        </Route>
        <Route exact path={`${path}/lazy2`}>
          <LazyPage2 />
        </Route>
        <Route exact path={`${path}/lazy3`}>
          <LazyPage3 />
        </Route>
        <Redirect to={`${path}/lazy2`} />
      </Switch>
    </div>
  );
};

export default LazyLayout;
