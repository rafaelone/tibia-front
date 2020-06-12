import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';

const Routes: React.FC = () => (
  <Switch>
    <Route name="/" exact component={Home} />
  </Switch>
);

export default Routes;
