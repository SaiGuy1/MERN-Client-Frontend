import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />

  </Switch>
);
