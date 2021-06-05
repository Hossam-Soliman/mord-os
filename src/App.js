import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
//components
import Footer from "./components/shared/Footer";
//selectors
import { getIsLoggedIn } from "./store/app/AppSelectors";

function App() {
  const isLoggedIn = useSelector((state) => getIsLoggedIn({ state }));
  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route
            exact
            path='/home'
            component={isLoggedIn ? HomePage : LoginPage}
          />
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route
            exact
            path='/login'
            component={isLoggedIn ? HomePage : LoginPage}
          />
        </Switch>
        {isLoggedIn && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
