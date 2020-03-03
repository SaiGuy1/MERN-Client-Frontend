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
  // Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import CityPosts from './components/Landing/CityPosts/CityPosts';
import Landing from './components/Landing/Landing';
import { withRouter } from 'react-router-dom';

class App extends Component {

  state = {
   isLogin: false
  }

  componentDidMount = () => {
    this.setCurrentUser(localStorage.getItem('jwt'))

  }
  setCurrentUser = jwt => {
    if (jwt) {
      this.setState({
        islogin: true
      })
      localStorage.setItem('jwt', jwt)
    }
  }
  handleLogout(){
    localStorage.removeItem('jwt');
    window.location='/';
  }



  render() {
    return (
      <Router>

        <Navigation isLogin={this.state.isLogin} setCurrentUser={this.setCurrentUser} handleLogout={this.handleLogout} />

        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/postdetail/:id" component={PostDetail} />
          <Route path="/profile">
          <Route path="/" render={() => (
        <Landing isLogin={this.state.isLogin} setCurrentUser={this.setCurrentUser} />
      )}/>

          <Route path="/citypost">
          <CityPosts />
          </Route>


        </Switch>

      </Router>

    );
  }
}

export default withRouter(App);
