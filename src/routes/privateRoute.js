/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';
import { HOME } from './routeUrls';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  const render = ({ props }) => {
    const location = props?.location;
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: HOME,
            state: { from: location },
          }}
        />
      );
    }
  };

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
