import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import PostDetail from './components/PostDetail/PostDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  state = {

  }

  componentDidMount = () => {

  }



  render() {
    return (
      <Router>

        <Navigation />
        <Switch>
          <Route path="/postdetail/:id" component={PostDetail} />
          <Route path="/profile">
          <Profile />
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
