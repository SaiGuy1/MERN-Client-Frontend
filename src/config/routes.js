import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp.js';
import LogIn from './components/LogIn/LogIn.js';
import Nav from './components/Nav/Nav.js';
import Profile from './components/Profile/Profile.js';

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/LogIn' component={LogIn} />
    <Route path='/SignUp' component={SignUp} />
    <Route
      path='/LogIn'
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route path='/profile' component={Profile} />
  </Switch>
);
