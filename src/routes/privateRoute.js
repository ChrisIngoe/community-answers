/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  const render = ({ props }) => {
    console.log(`authenticated: ${isAuthenticated}`);
    if (isAuthenticated) {
      return <Component {...props} />;
    } else if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return <p>you are not authenticated</p>;
    }
  };

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
