import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../components/Signup/Signup';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/Login' component={Login} />
    <Route path='/SignUp' component={SignUp} />
    <Route
      path='/Login'
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route path='/profile' component={Profile} />
  </Switch>
);
