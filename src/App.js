import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//components
import SideNav from "./components/shared/SideNav";
import RegistrationRoute from "./routing/RegistrationRoute";
import PrivateRoute from "./routing/PrivateRoute";
import { registerationRoutes, privateRoutes } from "./routing/RoutesConfig";
import Loader from "./components/shared/Loader";
//urls
import { getHomePageUrl, getLoginPageUrl } from "./constants/AppUrls";
//selectors
import { getIsLoggedIn, getIsLoaderOpen } from "./store/app/AppSelectors";

function App() {
  const isLoggedIn = useSelector((state) => getIsLoggedIn({ state })),
    showLoader = useSelector((state) => getIsLoaderOpen({ state }));

  return (
    <BrowserRouter>
      <div className='app'>
        {isLoggedIn && !showLoader && <SideNav />}
        {showLoader && <Loader />}
        <Switch>
          <Redirect
            exact
            from='/'
            to={isLoggedIn ? getHomePageUrl() : getLoginPageUrl()}
          />
          {registerationRoutes.map((route, i) => (
            <RegistrationRoute
              path={route.path}
              component={route.component}
              key={i}
            />
          ))}
          {privateRoutes.map((route, i) => (
            <PrivateRoute
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={i}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
