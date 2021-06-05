import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
//selectors
import { getIsLoggedIn } from "../store/app/AppSelectors";
//constants
import { getHomePageUrl } from "../constants/AppUrls";

const RegistrationRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => getIsLoggedIn({ state }));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{ pathname: getHomePageUrl(), state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default RegistrationRoute;
