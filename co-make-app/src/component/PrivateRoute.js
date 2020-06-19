import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...initialProps }) => {
  return (
    <Route
      {...initialProps}
      render={props => {
        //check to see if we think we have a good token
        if (localStorage.getItem("token")) //when available.
         {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
