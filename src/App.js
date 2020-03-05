import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Switch,
  Route,
  // Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import PostDetail from './components/PostDetail/PostDetail';
import CityPosts from './components/Landing/CityPosts/CityPosts';
import Landing from './components/Landing/Landing';


class App extends Component {

  state = {
   isLogin: localStorage.getItem('jwt')
  }

  componentDidMount = () => {
    this.setCurrentUser(localStorage.getItem('jwt'))

  }
  setCurrentUser = jwt => {
    console.log('go to App and set jwt')
    if (jwt) {
      this.setState({
        isLogin: true
      })
      localStorage.setItem('jwt', jwt)
    }
  }
  handleLogout(){
    localStorage.removeItem('jwt');
    window.location='/'; // <--- NO! BAD
  }



  render() {
    return (
      <>
        <Navigation isLogin={this.state.isLogin} setCurrentUser={this.setCurrentUser} handleLogout={this.handleLogout} />

        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/postdetail/:id" component={PostDetail} />
          // <Route exact path="/" render={() => <Landing isLogin={this.state.isLogin} setCurrentUser={this.setCurrentUser} />}/>
        </Switch>
      </>
    );
  }
}

export default App;
