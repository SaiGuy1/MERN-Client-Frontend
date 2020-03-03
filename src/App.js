import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import LogIn from './components/LogIn/LogIn.js';
import Navigation from './components/Navigation/Navigation.js';
// import SignUp from './components/SignUp/SignUp.js';
import Profile from './components/Profile/Profile.js';

class App extends Component {

  state = {
    isLoggedIn: false
  }

  componentDidMount = () => {
  if (localStorage.token) {
    this.setState({
      isLoggedIn: true
    })
  } else {
    this.setState({
      isLoggedIn: false
      })
    }
  }

  loggedIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  loggedOut = (e) => {
    e.preventDefault()
    this.setState({
      isLoggedIn: false
    })
    localStorage.clear();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <LogIn isLoggedIn={this.state.isLoggedIn} handleLogIn={this.loggedIn} handleLogOut={this.loggedOut}/>
        <SignUp /> */}
        <Profile />
      </div>
    );
  }
}

export default App;
