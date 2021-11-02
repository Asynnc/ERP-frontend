import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';

// import { Container } from './styles';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/login" component={SignIn} />
  </Switch>
);

export { Routes };