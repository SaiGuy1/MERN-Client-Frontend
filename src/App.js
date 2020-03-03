import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import HeroCarousel from './components/Carousel/Carousel';
import Description from './components/Description/Description';

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
          <Route path="/profile">
          <Profile />
          </Route>
        </Switch>
        <HeroCarousel />
        <Description />
      </Router>
  
    );
  }
}

export default App;
