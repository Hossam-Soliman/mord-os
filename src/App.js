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
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' component={LoginPage} />
          <Route exact path='/' render={() => <Redirect to='/home' />} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
