import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//selectors
import { getIsLoggedIn } from "../store/app/AppSelectors";
//constants
import { getLoginPageUrl } from "../constants/AppUrls";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => getIsLoggedIn({ state }));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: getLoginPageUrl(),
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
