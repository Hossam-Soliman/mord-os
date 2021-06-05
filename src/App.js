import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
//components
import Footer from "./components/shared/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route
            exact
            path='/'
            component={HomePage}
            // render={() => <Redirect to='/home' />}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
