import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
//components
import Footer from "./components/shared/Footer";
import SideNav from "./components/shared/SideNav";
import RegistrationRoute from "./routing/RegistrationRoute";
import PrivateRoute from "./routing/PrivateRoute";
import { registerationRoutes, privateRoutes } from "./routing/RoutesConfig";
//urls
import { getHomePageUrl, getLoginPageUrl } from "./constants/AppUrls";
//selectors
import { getIsLoggedIn } from "./store/app/AppSelectors";

function App() {
  const isLoggedIn = useSelector((state) => getIsLoggedIn({ state }));
  return (
    <BrowserRouter>
      <div className='app'>
        {isLoggedIn && <SideNav />}
        <Switch>
          {/* <Route
            exact
            path='/home'
            component={isLoggedIn ? HomePage : LoginPage}
          />
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route
            exact
            path='/login'
            component={isLoggedIn ? HomePage : LoginPage}
          /> */}
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
        {/* {isLoggedIn && <Footer />} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
