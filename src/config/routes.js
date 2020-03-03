import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../components/Signup/SignUp.js';
import Loginn from './components/Loginn/Loginn.js';
import Nav from './components/Nav/Nav.js';
import Profile from './components/Profile/Profile.js';

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    
    
  </Switch>
);
