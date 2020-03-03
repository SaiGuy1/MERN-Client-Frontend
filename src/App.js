import React, { Component } from 'react';
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
import CityPosts from './components/CityPosts/CityPosts';
import Landing from './components/Landing/Landing';

import HeroCarousel from './components/Carousel/Carousel';
import Description from './components/Description/Description';

class App extends Component {

  state = {
   isLogin: false
  }

  componentDidMount = () => {
    let token = localStorage.getItem('jwt');
    if (token) {
      this.setState({
        islogin: true
      })
    }else {
      this.setState({
        islogin: false
      })
    }
  }
  // { !this.state.isLogin ? <Landing/>: <CityPosts/>}


  render() {
    return (
      <Router>
    
        <Navigation />
        
        <Switch>
          <Route path="/profile">
          <Profile />
          </Route>
          <Route path="/">
          <Landing />
          </Route>
          <Route path="/citypost">
          <CityPosts />
          </Route>
         
        </Switch>
        <HeroCarousel />
        <Description />
      </Router>
  
    );
  }
}

export default App;
