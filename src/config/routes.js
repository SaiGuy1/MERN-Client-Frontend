import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from '../components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import Nav from './components/Nav/Nav.js';
import Profile from './components/Profile/Profile.js';

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route
      path='/LogIn'
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route path='/profile' component={Profile} />
  </Switch>
);
