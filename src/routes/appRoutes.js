import React from 'react';
import PropTypes from 'prop-types';
import * as routes from './routeUrls';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Question from '../pages/question';
import Answer from '../pages/answer';
import Result from '../pages/result';
import Home from '../pages/home';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={'/login'} component={Home} />
      <Route exact path={routes.HOME} component={Home} />
      <PrivateRoute path={routes.QUESTION} component={Question} />
      <PrivateRoute exact path={routes.ANSWER} component={Answer} />
      <PrivateRoute path={routes.ANSWER_WITH_ANSWERID} component={Answer} />
      <PrivateRoute path={routes.RESULT} component={Result} />
      <Route render={() => <div> Sorry, this page does not exist. </div>} />
    </Switch>
  );
};

AppRoutes.propTypes = {
  location: PropTypes.string,
};

export default AppRoutes;
