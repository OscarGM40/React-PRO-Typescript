import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />
          <ul>
            {routes.map(({ path, name }) => (
              <li key={path}>
                <NavLink to={path} activeClassName="nav-active" >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} 
            render={() => <Component />}>
            </Route>
          ))}
          <Redirect to={routes[0].path } />
        </Switch>
      </div>
    </BrowserRouter>
    </Suspense>
  );
};
