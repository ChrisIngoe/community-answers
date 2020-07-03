import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as routes from './routeUrls';
import { Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Question from '../pages/question';
import Answer from '../pages/answer';
import Result from '../pages/result';
import Home from '../pages/home';

const AppRoutes = () => {
  return (
    <Fragment>
      <Route path={routes.HOME1} component={Home} />
      <Route path={routes.HOME2} component={Home} />
      <Route path={routes.HOME3} component={Home} />
      <Route path={routes.HOME4} component={Home} />
      <PrivateRoute path={routes.QUESTION} component={Question} />
      <PrivateRoute exact path={routes.ANSWER} component={Answer} />
      <PrivateRoute path={routes.ANSWER_WITH_ANSWERID} component={Answer} />
      <PrivateRoute path={routes.RESULT} component={Result} />
    </Fragment>
  );
};

AppRoutes.propTypes = {
  location: PropTypes.string,
};

export default AppRoutes;
